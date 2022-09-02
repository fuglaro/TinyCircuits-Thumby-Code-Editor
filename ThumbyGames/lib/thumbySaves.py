# Thumby saves base
# Written by Mason Watmough, Jason Marcum, and Ben Rose for TinyCircuits.
# Last edited 7/11/2022

'''
    This file is part of the Thumby API.

    The Thumby API is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The Thumby API is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with
    the Thumby API. If not, see <https://www.gnu.org/licenses/>.
'''

from json import load as JSONLoad, dump as JSONDump
from ubinascii import a2b_base64 as b64dec, b2a_base64 as b64enc
import os

# Last updated 8/25/2022 for menu reset change
__version__ = '1.8'

class SavesClass:
    def __init__(self):
        
        oldDir = os.getcwd()
        try:
            os.stat("/Saves")
        except OSError:
            os.chdir("/")
            os.mkdir("/Saves")
            os.mkdir("/Saves/temp")
            
        self.savesPath = "/Saves"
        self.saveFile = None
        self.volatileDict = dict()
        
        try:
            os.stat("/Saves/temp")
            self.setName("temp")
        except OSError:
            pass
        
        os.chdir(oldDir)
    
    # Set a game save's working subdirectory in "/Saves/"
    @micropython.viper
    def setName(self, subdir):
        
        oldDir = os.getcwd()
        self.savesPath = "/Saves/" + subdir
        
        try:
            os.stat(self.savesPath)
        except OSError:
            os.mkdir(self.savesPath)
        
        if type(self.saveFile) != type(None):
            self.saveFile.close()
        
        try:
            self.saveFile = open(self.savesPath+"/persistent.json", "r+")
            self.volatileDict = JSONLoad(self.saveFile)
        except (OSError, ValueError):
            try:
                self.saveFile = open(self.savesPath+"/backup.json", "r+")
                self.volatileDict = JSONLoad(self.saveFile)
                self.write(False) # Make sure we have a persistent.json
            except (OSError, ValueError):
                self.saveFile = open(self.savesPath+"/persistent.json", "w+") # Make a new one
                self.saveFile.write("{}")
                self.saveFile.seek(0, 0)
                self.volatileDict = JSONLoad(self.saveFile)
        os.chdir(oldDir)
    
    # Set entry in volatile dictionary
    @micropython.native
    def setItem(self, key, value):
        if(key[:3] == "__b"):
            raise ValueError("Save data key cannot be prefixed with metadata tag \"__b\"")
        if(type(value) is bytes or type(value) is bytearray): # Attach bytes metadata to the key
            key = "__b"+key 
            self.volatileDict.update({key:b64enc(value)})
        else:
            self.volatileDict.update({key:value})
    
    # Get entry from volatile dictionary
    @micropython.native
    def getItem(self, key):
        ret = self.volatileDict.get(key, None)
        if ret == None:
            try: # Look for a bytes item under the key
                ret = b64dec(self.volatileDict.get("__b"+key, None))
            except TypeError:
                return None
        return ret
    
    # Delete entry in volatile dictionary
    @micropython.viper
    def delItem(self, key):
        try:
            return self.volatileDict.pop(key)
        except KeyError:
            try: # Try deleting as a bytes item
                return self.volatileDict.pop("__b"+key)
            except KeyError:
                return None
        
    # Check if save data entry exists in volatile dictionary
    @micropython.viper
    def hasItem(self, key) -> bool:
        if key in self.volatileDict:
            return True
        if "__b"+key in self.volatileDict:
            return True
        return False
    
    # Write volatile dictionary to persistent.json
    @micropython.native
    def save(self, backup = False):
        
        oldDir = os.getcwd()
        
        if(self.savesPath == "/Saves"): # If a directory hasn't been set, use a temporary one
            self.savesPath = "/Saves/temp"
        
        if type(self.saveFile) != type(None):
            self.saveFile.close()
        
        try:
            if(backup == True):
                os.rename(self.savesPath+"/persistent.json", self.savesPath+"/backup.json")
            else:
                os.remove(self.savesPath+"/persistent.json")
        except OSError:
            pass
        
        self.saveFile = open(self.savesPath+"/persistent.json", "w+")
        JSONDump(self.volatileDict, self.saveFile)
        self.saveFile.flush()
        os.chdir(oldDir)
    
    # Return the current save path
    @micropython.viper
    def getName(self):
        return self.savesPath

# Saves instantiation
saveData = SavesClass()