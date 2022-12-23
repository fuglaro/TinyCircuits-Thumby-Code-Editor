
Blockly.Msg.FLOW_HUE = 50;
Blockly.Msg.ADVANCED_HUE = 0;

var blocklyToolbox = {
  "contents": [
    {
      "name": "Logic",
      "kind": "CATEGORY", "categorystyle": "logic_category",
      "contents": [
        {"type": "controls_if", "kind": "BLOCK"},
        {"type": "logic_compare", "kind": "BLOCK"},
        {"type": "logic_operation", "kind": "BLOCK"},
        {"type": "logic_negate", "kind": "BLOCK"},
        {"type": "logic_boolean", "kind": "BLOCK"},
        {"type": "logic_null", "kind": "BLOCK"},
        {"type": "logic_ternary", "kind": "BLOCK"}
      ]
    },
    {
      "name": "Loops",
      "kind": "CATEGORY", "categorystyle": "loop_category",
      "contents": [
        {"type": "controls_repeat_ext", "kind": "BLOCK", "inputs": {
          "TIMES": {"shadow": {"type": "math_number", "fields": {"NUM": 10}}}},
        },
        {"type": "controls_whileUntil", "kind": "BLOCK"},
        {"type": "controls_for", "kind": "BLOCK", "inputs": {
          "FROM": {"shadow": {"type": "math_number", "fields": {"NUM": 10}}},
          "TO": {"shadow": {"type": "math_number", "fields": {"NUM": 10}}},
          "BY": {"shadow": {"type": "math_number", "fields": {"NUM": 1}}}},
        },
        {"type": "controls_forEach", "kind": "BLOCK"},
        {"type": "controls_flow_statements", "kind": "BLOCK"}
      ]
    },
    {
      "name": "Math",
      "kind": "CATEGORY", "categorystyle": "math_category", "contents": [
        {"type": "math_number", "kind": "BLOCK", "fields": {"NUM": 123}},
        {"type": "math_arithmetic", "kind": "BLOCK", "inputs": {
          "A": {"shadow": {"type": "math_number", "fields": {"NUM": 1}}},
          "B": {"shadow": {"type": "math_number", "fields": {"NUM": 1}}}},
        },
        {"type": "math_single", "kind": "BLOCK", "inputs": {
          "NUM": {"shadow": {"type": "math_number", "fields": {"NUM": 9}}}},
        },
        {"type": "math_trig", "kind": "BLOCK", "inputs": {
          "NUM": {"shadow": {"type": "math_number", "fields": {"NUM": 45}}}},
        },
        {"type": "math_constant", "kind": "BLOCK"},
        {"type": "math_number_property", "kind": "BLOCK", "inputs": {
          "NUMBER_TO_CHECK": {"shadow": {"type": "math_number", "fields": {"NUM": 0}}}},
        },
        {"type": "math_round", "kind": "BLOCK", "inputs": {
          "NUM": {"shadow": {"type": "math_number", "fields": {"NUM": 3.1}}}},
        },
        {"type": "math_on_list", "kind": "BLOCK"},
        {"type": "math_modulo", "kind": "BLOCK", "inputs": {
          "DIVIDEND": {"shadow": {"type": "math_number", "fields": {"NUM": 61}}},
          "DIVISOR": {"shadow": {"type": "math_number", "fields": {"NUM": 10}}}},
        },
        {"type": "math_constrain", "kind": "BLOCK", "inputs": {
          "VALUE": {"shadow": {"type": "math_number", "fields": {"NUM": 50}}},
          "LOW": {"shadow": {"type": "math_number", "fields": {"NUM": 1}}},
          "HIGH": {"shadow": {"type": "math_number", "fields": {"NUM": 100}}}},
        },
        {"type": "math_random_int", "kind": "BLOCK", "inputs": {
          "FROM": {"shadow": {"type": "math_number", "fields": {"NUM": 1}}},
          "TO": {"shadow": {"type": "math_number", "fields": {"NUM": 10}}}},
        },
        {"type": "math_random_float", "kind": "BLOCK"},
        {"type": "var_to_int", "kind": "BLOCK"},
        {"type": "var_to_float", "kind": "BLOCK"},
      ]
    },
    {
      "name": "Text",
      "kind": "CATEGORY", "categorystyle": "text_category",
      "contents": [
        {"type": "text_print", "kind": "BLOCK"},
        {"type": "text", "kind": "BLOCK", "fields": {"TEXT": "abc"}},
        {"type": "text_multiline", "kind": "BLOCK", "fields": {"TEXT": "abc\ndef"}},
        {"type": "text_join", "kind": "BLOCK"},
        {"type": "text_append", "kind": "BLOCK", "inputs": {
          "TEXT": {"shadow": {"type": "text", "fields": {"TEXT": "abc"}}}},
        },
        {"type": "text_length", "kind": "BLOCK", "inputs": {
          "VALUE": {"shadow": {"type": "text", "fields": {"TEXT": "abc"}}}},
        },
        {"type": "text_isEmpty", "kind": "BLOCK", "inputs": {
          "VALUE": {"shadow": {"type": "text", "fields": {"TEXT": "abc"}}}},
        },
        {"type": "text_indexOf", "kind": "BLOCK", "inputs": {
          "FIND": {"shadow": {"type": "text", "fields": {"TEXT": "abc"}}}},
        },
        {"type": "text_charAt", "kind": "BLOCK"},
        {"type": "text_getSubstring", "kind": "BLOCK"},
        {"type": "text_changeCase", "kind": "BLOCK"},
        {"type": "text_trim", "kind": "BLOCK"},
        {"type": "text_count", "kind": "BLOCK", "inputs": {
          "SUB": {"shadow": {"type": "text", "fields": {"TEXT": "abc"}}}},
        },
        {"type": "text_replace", "kind": "BLOCK", "inputs": {
          "FROM": {"shadow": {"type": "text", "fields": {"TEXT": "abc"}}},
          "TO": {"shadow": {"type": "text", "fields": {"TEXT": "def"}}}},
        },
        {"type": "text_reverse", "kind": "BLOCK"},
        {"type": "var_to_str", "kind": "BLOCK"},
      ]
    },
    {
      "name": "Lists",
      "kind": "CATEGORY",
      "categorystyle": "list_category",
      "contents": [
        {"type": "lists_create_empty", "kind": "BLOCK"},
        {"type": "lists_create_with", "kind": "BLOCK"},
        {"type": "lists_repeat", "kind": "BLOCK", "inputs": {
          "NUM": {"shadow": {"type": "math_number", "fields": {"NUM": 5}}}},
        },
        {"type": "lists_length", "kind": "BLOCK"},
        {"type": "lists_isEmpty", "kind": "BLOCK"},
        {"type": "lists_indexOf", "kind": "BLOCK"},
        {"type": "lists_getIndex", "kind": "BLOCK"},
        {"type": "lists_setIndex", "kind": "BLOCK"},
        {"type": "lists_getSublist", "kind": "BLOCK"},
        {"type": "lists_split", "kind": "BLOCK", "inputs": {
          "DELIM": {"shadow": {"type": "text", "fields": {"TEXT": ","}}}},
        },
        {"type": "lists_sort", "kind": "BLOCK"},
        {"type": "lists_reverse", "kind": "BLOCK"}
      ],
    },
    {"kind": "SEP"},
    {
      "name": "Variables",
      "kind": "CATEGORY", "categorystyle": "variable_category",
      "custom": "VARIABLE"
    },
    {
      "name": "Functions",
      "kind": "CATEGORY", "categorystyle": "procedure_category",
      "custom": "PROCEDURE"
    },
    {"kind": "SEP"},
    {
      "name": "Flow",
      "kind": "CATEGORY", "colour": "%{BKY_FLOW_HUE}",
      "contents": [
        {"type": "wait", "kind": "BLOCK", "inputs": {
          "TIME": {"shadow": {"type": "math_number", "fields": {"NUM": 1}}}},
        },
        {"type": "ticks_ms", "kind": "BLOCK"},
        {"type": "ticks_diff", "kind": "BLOCK"},
        {"text": "Create timer...", "kind": "button",
          "callbackKey": "createTimer"
        },
        {"type": "timer", "kind": "BLOCK"},
        {"type": "stop_timer", "kind": "BLOCK"},
      ]
    },
    {
      "name": "Hardware",
      "kind": "CATEGORY", "colour": "%{BKY_ADVANCED_HUE}",
      "contents": [
        {"type": "set_freq", "kind": "BLOCK"},
        {"type": "get_freq", "kind": "BLOCK"},
        {"type": "reset", "kind": "BLOCK"},
      ]
    },
    {"kind": "SEP"},
    {
      "name": "Advanced",
      "kind": "CATEGORY", "colour": "%{BKY_ADVANCED_HUE}",
      "contents": [
        {"type": "exec_python", "kind": "BLOCK", "inputs": {
          "command": {"shadow": {"type": "text_multiline", "fields": {"TEXT": ""}}}},
        },
        {"type": "exec_python_output", "kind": "BLOCK", "inputs": {
          "command": {"shadow": {"type": "text", "fields": {"TEXT": ""}}}},
        },
        {"type": "python_try_catch", "kind": "BLOCK"},
        {"type": "gc_collect", "kind": "BLOCK"},
      ]
    },
  ]
};


Blockly.defineBlocksWithJsonArray([
  {
    "type": "ticks_diff",
    "message0": 'time from %2 to %1',
    "args0": [
      {"name": "end", "type": "input_value", "check": "Number"},
      {"name": "start", "type": "input_value", "check": "Number"}
    ],
    "output": "Number",
    "colour": "%{BKY_FLOW_HUE}",
    "tooltip": "Compute time difference."
  },
  {
    "type": "ticks_ms",
    "message0": 'time (ms)',
    "output": "Number",
    "colour": "%{BKY_FLOW_HUE}",
    "tooltip": "Get millisecond counter."
  },
  {
    "type": "wait",
    "message0": 'wait %1 %2',
    "args0": [
      {"name": "TIME", "type": "input_value", "check": "Number"},
      {"name": "SCALE", "type": "field_dropdown", "options":
        [["seconds","sleep"], ["milliseconds","sleep_ms"], ["microseconds","sleep_us"]]}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_FLOW_HUE}",
    "tooltip": "Delay for a given amount of time."
  },
  {
    "type": "timer",
    "message0": 'timer %1 do %2 %3 ms',
    "args0": [
      {"name": "NAME", "type": "field_variable", "variable": "timer1",
        "variableTypes": ["Timer"], "defaultType": "Timer"},
      {"name": "MODE", "type": "field_dropdown", "options":
        [["every","PERIODIC"], ["once in","ONE_SHOT"]]},
      {"name": "INTERVAL", "type": "field_number", "value": 1000},
    ],
    "message1": '%1',
    "args1": [
      {"name": "STACK", "type": "input_statement"},
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_FLOW_HUE}",
    "tooltip": "Set a Timer to execute periodically or once after a time given in milliseconds."
  },
  {
    "type": "stop_timer",
    "message0": 'stop %1',
    "args0": [
      {"name": "NAME", "type": "field_variable", "variable": "timer1",
        "variableTypes": ["Timer"], "defaultType": "Timer"},
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_FLOW_HUE}",
    "tooltip": "Stop a timer."
  },
  {
    "type": "reset",
    "message0": 'reset',
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Reset device."
  },
  {
    "type": "set_freq",
    "message0": 'set core frequency %1 Hz',
    "args0": [
      {"name": "freq", "type": "field_number", "value": 125000000},
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Set CPU clock frequency."
  },
  {
    "type": "get_freq",
    "message0": 'core freqeuency',
    "output": "Number",
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Get CPU clock frequency."
  },
  {
    "type": "exec_python",
    "message0": 'run Python %1',
    "args0": [
      {"name": "command", "type": "input_value", "check": "String"},
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Execute custom Python code."
  },
  {
    "type": "exec_python_output",
    "message0": 'evaluate Python %1',
    "args0": [
      {"name": "command", "type": "input_value", "check": "String"},
    ],
    "output": "Number",
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Evaluate custom Python code returning the result."
  },
  {
    "type": "python_try_catch",
    "message0": 'try %1',
    "args0": [
      {"name": "try", "type": "input_statement"},
    ],
    "message1": 'catch %1',
    "args1": [
      {"name": "catch", "type": "input_statement"},
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Python try/except clause for catching exceptions."
  },
  {
    "type": "gc_collect",
    "message0": 'trigger garbage collection',
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ADVANCED_HUE}",
    "tooltip": "Scan for and free memory that is no longer needed."
  },
  {
    "type": "var_to_str",
    "message0": 'to text %1',
    "args0": [
      {"name": "var", "type": "input_value"},
    ],
    "output": "String",
    "colour": "%{BKY_TEXTS_HUE}",
    "tooltip": "Convert anything to text."
  },
  {
    "type": "var_to_int",
    "message0": 'to int %1',
    "args0": [
      {"name": "var", "type": "input_value"},
    ],
    "output": "Number",
    "colour": "%{BKY_MATH_HUE}",
    "tooltip": "Convert anything to text."
  },
  {
    "type": "var_to_float",
    "message0": 'to float %1',
    "args0": [
      {"name": "var", "type": "input_value"},
    ],
    "output": "Number",
    "colour": "%{BKY_MATH_HUE}",
    "tooltip": "Convert anything to text."
  },
]);


var PY = Blockly.Python;
var NM = Blockly.Names;
var VAR = Blockly.Variables;

function blocklyRegister(workspace) {

  workspace.registerButtonCallback("createTimer", ()=>{
    Blockly.Variables.createVariableButtonHandler(workspace, null, 'Timer');
  });
}

PY['ticks_diff'] = function(block) {
  PY.definitions_['import_time'] = 'import time';
  var start = PY.valueToCode(block, 'start', PY.ORDER_NONE) || 0;
  var end = PY.valueToCode(block, 'end', PY.ORDER_NONE) || 0;
  return [`time.ticks_diff(${end}, ${start})`, PY.ORDER_FUNCTION_CALL];
};

PY['ticks_ms'] = function(block) {
  PY.definitions_['import_time'] = 'import time';
  return ['time.ticks_ms()', PY.ORDER_FUNCTION_CALL];
};

PY['wait'] = function(block) {
  PY.definitions_['import_time'] = 'import time';
  var duration = PY.valueToCode(block, 'TIME', PY.ORDER_NONE) || 0;
  var scale = block.getFieldValue('SCALE');
  return `time.${scale}(${duration})\n`;
};

PY['reset'] = function(block) {
  PY.definitions_['import_machine'] = 'import machine';
  return 'machine.reset()\n';
};

PY['set_freq'] = function(block) {
  PY.definitions_['import_machine'] = 'import machine';
  var freq = block.getFieldValue('freq');
  return `machine.freq(${freq})\n`;
};

PY['get_freq'] = function(block) {
  PY.definitions_['import_machine'] = 'import machine';
  return ['machine.freq() or 0' /*emulator gives None*/, PY.ORDER_LOGICAL_OR];
};

PY['exec_python'] = function(block) {
  var command = PY.valueToCode(block, 'command', PY.ORDER_ATOMIC);
  return `exec(${command})\n`;
};

PY['exec_python_output'] = function(block) {
  var command = PY.valueToCode(block, 'command', PY.ORDER_ATOMIC);
  return [`eval(${command})`, PY.ORDER_FUNCTION_CALL];
};

PY['python_try_catch'] = function(block) {
  var code = PY.statementToCode(block, 'try');
  var fallback = PY.statementToCode(block, 'catch');
  return `try:\n${code}except:\n${fallback}\n`;
};

PY["gc_collect"] = function(block) {
  PY.definitions_['import_gc'] = 'import gc';
  return "gc.collect()\n";
};

PY['var_to_str'] = function(block) {
  var variable = PY.valueToCode(block, 'var', PY.ORDER_ATOMIC);
  return [`str(${variable})`, PY.ORDER_FUNCTION_CALL];
};


PY['var_to_int'] = function(block) {
  var variable = PY.valueToCode(block, 'var', PY.ORDER_ATOMIC);
  return [`int(${variable})`, PY.ORDER_FUNCTION_CALL];
};


PY['var_to_float'] = function(block) {
  var variable = PY.valueToCode(block, 'var', PY.ORDER_ATOMIC);
  return [`float(${variable})`, PY.ORDER_FUNCTION_CALL];
};

PY['timer'] = function(block) {
  var interval = block.getFieldValue('INTERVAL');
  var timerName = PY.nameDB_.getName(block.getFieldValue('NAME'), NM.NameType.VARIABLE);
  var run = PY.statementToCode(block, 'STACK') || PY.PASS;
  var mode = block.getFieldValue('MODE');
  PY.definitions_['import_timer'] = 'from machine import Timer';
  PY.definitions_[`import_timer_setup_${timerName}`] = `${timerName} = Timer()`;

  // Allow global variables access inside callback function
  var globals = [];
  var variables = Blockly.Variables.allUsedVarModels(block.workspace) || [];
  for (var i = 0, variable; (variable = variables[i]); i++) {
      globals.push(PY.nameDB_.getName(variable.name,
          Blockly.VARIABLE_CATEGORY_NAME));
  }
  globals = globals.length ? PY.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  PY.definitions_[`import_timer_callback_${timerName}`] = (
    `def ____timerFunc____${timerName}(_):\n${globals}${run}\n\n`);
  return `${timerName}.init(period=${interval}, mode=Timer.${mode}, callback=____timerFunc____${timerName})\n`;
};


PY['stop_timer'] = function(block) {
  var timerName = PY.nameDB_.getName(block.getFieldValue('NAME'), NM.NameType.VARIABLE);
  PY.definitions_['import_timer'] = 'from machine import Timer';
  PY.definitions_[`import_timer_setup_${timerName}`] = `${timerName} = Timer()`;
  return `${timerName}.deinit()\n`;
};
