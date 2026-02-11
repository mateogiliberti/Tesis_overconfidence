/************************************* 
 * Discriminacion De Ptos_Final *
 *************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Discriminacion de ptos_final';  // from the Builder filename that created this script
let expInfo = {
    'legajo': "''",
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(BienvenidaRoutineBegin());
flowScheduler.add(BienvenidaRoutineEachFrame());
flowScheduler.add(BienvenidaRoutineEnd());
flowScheduler.add(InstruccionRoutineBegin());
flowScheduler.add(InstruccionRoutineEachFrame());
flowScheduler.add(InstruccionRoutineEnd());
flowScheduler.add(condicionesRoutineBegin());
flowScheduler.add(condicionesRoutineEachFrame());
flowScheduler.add(condicionesRoutineEnd());
const fase_pruebaLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(fase_pruebaLoopBegin(fase_pruebaLoopScheduler));
flowScheduler.add(fase_pruebaLoopScheduler);
flowScheduler.add(fase_pruebaLoopEnd);




flowScheduler.add(Instrucciones_testeoRoutineBegin());
flowScheduler.add(Instrucciones_testeoRoutineEachFrame());
flowScheduler.add(Instrucciones_testeoRoutineEnd());
const fase_testeoLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(fase_testeoLoopBegin(fase_testeoLoopScheduler));
flowScheduler.add(fase_testeoLoopScheduler);
flowScheduler.add(fase_testeoLoopEnd);




flowScheduler.add(despedidaRoutineBegin());
flowScheduler.add(despedidaRoutineEachFrame());
flowScheduler.add(despedidaRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["numero de legajo"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var BienvenidaClock;
var text;
var key_resp_2;
var InstruccionClock;
var text_instructions;
var key_instrucciones;
var condicionesClock;
var pid;
var group;
var txt_instrucciones_escala;
var txt_leyenda_breve;
var rutina_fixClock;
var stim_cruz;
var trial_pruebaClock;
var resp_ptos;
var feedbackClock;
var Feedback;
var Instrucciones_testeoClock;
var testeo_instrucciones;
var Key_instrucciones_test;
var trial_testeoClock;
var resp_testeo;
var EscalaOCClock;
var Escala_confianza;
var key_conf;
var despedidaClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Bienvenida"
  BienvenidaClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Bienvenido/a al experimento.\n\n\n\nVas a participar en un estudio sobre toma de decisiones perceptivas. Tu tarea principal consistirá en observar nubes de puntos de dos colores (rojo y azul) y decidir rápidamente cuál de los dos colores es más numeroso.\n\nEl experimento consta de dos etapas. A continuación, recibirás las instrucciones detalladas para la primera etapa.\n\n\n\nPresiona la BARRA ESPACIADORA para continuar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruccion"
  InstruccionClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'En cada ensayo verás una caja con puntos rojos y azules mezclados. Tu objetivo es identificar el color dominante (el que tiene más puntos).\n\n\nTeclas de respuesta:\n\n- Presiona C si hay más puntos AZULES.\n\n\n- Presiona N si hay más puntos ROJOS.\n\nTendras un total de 10 segundos para responder  \n\n\nFeedback de Desempeño: \nAl final de cada bloque de 24 ensayos, verás una pantalla con resultados. Estos indicarán tu desempeño (precisión y velocidad) comparado con un grupo de participantes que realizó este estudio anteriormente.\n\n\n\nPresiona la BARRA ESPACIADORA para comenzar.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instrucciones = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "condiciones"
  condicionesClock = new util.Clock();
  // Run 'Begin Experiment' code from asignacion
  // --- 1. ASIGNACIÓN DE GRUPO ---
  var raw_id = expInfo['legajo']; 
  var digits_only = String(raw_id).replace(/\D/g, '');
  var pid = null;
  var group = 'Control'; 
  
  if (digits_only.length > 0) {
      pid = parseInt(digits_only);
      if (pid % 2 === 0) {
          group = 'Experimental';
      } else {
          group = 'Control';
      }
  }
  psychoJS.experiment.addData('assigned_group', group);
  window.group = group; 
  
  
  // --- 2. SORTEO DE ORDEN DE ESCALA ---
  var scale_order = (Math.random() > 0.5) ? 'Standard' : 'Reverse';
  psychoJS.experiment.addData('scale_order', scale_order);
  
  
  // --- 3. DEFINIR MAPAS (Para usar después) ---
  var map_standard = { '1': 1, '2': 2, '3': 3, '8': 4, '9': 5, '0': 6 };
  var map_reverse = { '1': 6, '2': 5, '3': 4, '8': 3, '9': 2, '0': 1 };
  
  // Guardamos el mapa activo en una variable global para usarlo en el Test
  window.active_conf_map = (scale_order === 'Standard') ? map_standard : map_reverse;
  
  
  // --- 4. TEXTOS (Instrucciones y Leyendas) ---
  
  var txt_instrucciones_escala = ""; // Para la pantalla de explicación
  var txt_leyenda_breve = "";        // Para la pantalla de cada trial
  
  if (scale_order === 'Standard') {
      // TEXTO LARGO
      txt_instrucciones_escala = 
      "IZQUIERDA (1-2-3) = Poca Confianza\nDERECHA (8-9-0) = Mucha Confianza\n\n" +
      "1: Seguramente Incorrecto\n" +
      "2: Probablemente Incorrecto\n" +
      "3: Tal vez Incorrecto\n\n" +
      "8: Tal vez Correcto\n" +
      "9: Probablemente Correcto\n" +
      "0: Seguramente Correcto";
      
      // TEXTO CORTO (LEYENDA)
      txt_leyenda_breve = 
      "Indica tu confianza:\n" +
      "1=Seg. Incorrecto   2=Prob. Incorrecto   3=Tal vez Incorrecto\n" +
      "8=Tal vez Correcto   9=Prob. Correcto   0=Seg. Correcto";
  
  } else {
      // TEXTO LARGO REVERSO
      txt_instrucciones_escala = 
      "IZQUIERDA (1-2-3) = Mucha Confianza\nDERECHA (8-9-0) = Poca Confianza\n\n" +
      "1: Seguramente Correcto\n" +
      "2: Probablemente Correcto\n" +
      "3: Tal vez Correcto\n\n" +
      "8: Tal vez Incorrecto\n" +
      "9: Probablemente Incorrecto\n" +
      "0: Seguramente Incorrecto";
  
      // TEXTO CORTO REVERSO
      txt_leyenda_breve = 
      "Indica tu confianza:\n" +
      "1=Seg. Correcto   2=Prob. Correcto   3=Tal vez Correcto\n" +
      "8=Tal vez Incorrecto   9=Prob. Incorrecto   0=Seg. Incorrecto";
  }
  
  // Hacemos globales los textos para que los componentes de Texto los vean
  window.txt_instrucciones_escala = txt_instrucciones_escala;
  window.txt_leyenda_breve = txt_leyenda_breve;
  
  
  
  
  
  
  // Initialize components for Routine "rutina_fix"
  rutina_fixClock = new util.Clock();
  stim_cruz = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_cruz',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial_prueba"
  trial_pruebaClock = new util.Clock();
  // Run 'Begin Experiment' code from trial_prueba
  // Definimos parámetros GLOBALES
  window.nDots = 80; 
  window.stimDuration = 0.2; // 200 ms
  window.cloudRadius = 0.30; 
  window.dotSize = 0.015;
  
  // Diccionario de dificultades
  window.difficulties = {
      'Easy': [61, 62, 63, 64, 65],
      'Average': [51, 52, 53, 54, 55],
      'Difficult': [41, 42, 43, 44, 45]
  };
  
  // --- Inicialización de los puntos ---
  window.myDots = []; // Hacemos la lista global
  
  for (var i = 0; i < window.nDots; i++) {
      let newDot = new visual.Polygon({
          win: psychoJS.window,
          name: 'dot_' + i,
          units: 'height',
          edges: 32, 
          radius: window.dotSize / 2, 
          ori: 0,
          pos: [0, 0], 
          lineWidth: 1,
          lineColor: new util.Color('white'),
          fillColor: new util.Color('white'),
          opacity: 1,
          depth: 0,
          interpolate: true,
      });
      // ¡OJO! No le ponemos autoDraw aquí
      newDot.setAutoDraw(false);
      window.myDots.push(newDot);
  }
  resp_ptos = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Definimos las constantes aquí para evitar errores
  window.blockSize = 24;    // Tamaño del bloque
  window.feedbackText = ""; // Texto vacío al inicio
  
  // Creamos el reloj manualmente para evitar el ReferenceError
  window.FeedbackClock = new util.Clock();
  Feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instrucciones_testeo"
  Instrucciones_testeoClock = new util.Clock();
  testeo_instrucciones = new visual.TextStim({
    win: psychoJS.window,
    name: 'testeo_instrucciones',
    text: 'Fin de la Etapa 1.\n\nA partir de ahora comienza la segunda etapa. La tarea visual sigue siendo la misma: indicar si hay más puntos rojos o azules usando las teclas N y C, respectivamente. \nPero a diferencia de la etapa anterior, ya NO recibirás feedback sobre tu desempeño al final de los bloques.  En su lugar, te pediremos que evalúes tu Nivel de Confianza después de cada decisión.\n Es decir, tendrás que indicarnos qué tan seguro/a estás de que tu respuesta anterior fue correcta o incorrecta.\n\nPresiona la BARRA ESPACIADORA para comenzar.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Key_instrucciones_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_testeo"
  trial_testeoClock = new util.Clock();
  resp_testeo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EscalaOC"
  EscalaOCClock = new util.Clock();
  Escala_confianza = new visual.TextStim({
    win: psychoJS.window,
    name: 'Escala_confianza',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_conf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "despedida"
  despedidaClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var BienvenidaMaxDurationReached;
var _key_resp_2_allKeys;
var BienvenidaMaxDuration;
var BienvenidaComponents;
function BienvenidaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Bienvenida' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BienvenidaClock.reset();
    routineTimer.reset();
    BienvenidaMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('Bienvenida.started', globalClock.getTime());
    BienvenidaMaxDuration = null
    // keep track of which components have finished
    BienvenidaComponents = [];
    BienvenidaComponents.push(text);
    BienvenidaComponents.push(key_resp_2);
    
    for (const thisComponent of BienvenidaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BienvenidaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Bienvenida' ---
    // get current time
    t = BienvenidaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BienvenidaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BienvenidaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Bienvenida' ---
    for (const thisComponent of BienvenidaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Bienvenida.stopped', globalClock.getTime());
    key_resp_2.stop();
    // the Routine "Bienvenida" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InstruccionMaxDurationReached;
var _key_instrucciones_allKeys;
var InstruccionMaxDuration;
var InstruccionComponents;
function InstruccionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruccion' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstruccionClock.reset();
    routineTimer.reset();
    InstruccionMaxDurationReached = false;
    // update component parameters for each repeat
    key_instrucciones.keys = undefined;
    key_instrucciones.rt = undefined;
    _key_instrucciones_allKeys = [];
    psychoJS.experiment.addData('Instruccion.started', globalClock.getTime());
    InstruccionMaxDuration = null
    // keep track of which components have finished
    InstruccionComponents = [];
    InstruccionComponents.push(text_instructions);
    InstruccionComponents.push(key_instrucciones);
    
    for (const thisComponent of InstruccionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstruccionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruccion' ---
    // get current time
    t = InstruccionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    
    // if text_instructions is active this frame...
    if (text_instructions.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instrucciones* updates
    if (t >= 0.0 && key_instrucciones.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instrucciones.tStart = t;  // (not accounting for frame time here)
      key_instrucciones.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instrucciones.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instrucciones.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instrucciones.clearEvents(); });
    }
    
    // if key_instrucciones is active this frame...
    if (key_instrucciones.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instrucciones.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_instrucciones_allKeys = _key_instrucciones_allKeys.concat(theseKeys);
      if (_key_instrucciones_allKeys.length > 0) {
        key_instrucciones.keys = _key_instrucciones_allKeys[_key_instrucciones_allKeys.length - 1].name;  // just the last key pressed
        key_instrucciones.rt = _key_instrucciones_allKeys[_key_instrucciones_allKeys.length - 1].rt;
        key_instrucciones.duration = _key_instrucciones_allKeys[_key_instrucciones_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstruccionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstruccionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruccion' ---
    for (const thisComponent of InstruccionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruccion.stopped', globalClock.getTime());
    key_instrucciones.stop();
    // the Routine "Instruccion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var condicionesMaxDurationReached;
var condicionesMaxDuration;
var condicionesComponents;
function condicionesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'condiciones' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    condicionesClock.reset();
    routineTimer.reset();
    condicionesMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('condiciones.started', globalClock.getTime());
    condicionesMaxDuration = null
    // keep track of which components have finished
    condicionesComponents = [];
    
    for (const thisComponent of condicionesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function condicionesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'condiciones' ---
    // get current time
    t = condicionesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of condicionesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function condicionesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'condiciones' ---
    for (const thisComponent of condicionesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('condiciones.stopped', globalClock.getTime());
    // the Routine "condiciones" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fase_prueba;
function fase_pruebaLoopBegin(fase_pruebaLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    fase_prueba = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 120, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'fase_prueba'
    });
    psychoJS.experiment.addLoop(fase_prueba); // add the loop to the experiment
    currentLoop = fase_prueba;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFase_prueba of fase_prueba) {
      snapshot = fase_prueba.getSnapshot();
      fase_pruebaLoopScheduler.add(importConditions(snapshot));
      fase_pruebaLoopScheduler.add(rutina_fixRoutineBegin(snapshot));
      fase_pruebaLoopScheduler.add(rutina_fixRoutineEachFrame());
      fase_pruebaLoopScheduler.add(rutina_fixRoutineEnd(snapshot));
      fase_pruebaLoopScheduler.add(trial_pruebaRoutineBegin(snapshot));
      fase_pruebaLoopScheduler.add(trial_pruebaRoutineEachFrame());
      fase_pruebaLoopScheduler.add(trial_pruebaRoutineEnd(snapshot));
      fase_pruebaLoopScheduler.add(feedbackRoutineBegin(snapshot));
      fase_pruebaLoopScheduler.add(feedbackRoutineEachFrame());
      fase_pruebaLoopScheduler.add(feedbackRoutineEnd(snapshot));
      fase_pruebaLoopScheduler.add(fase_pruebaLoopEndIteration(fase_pruebaLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function fase_pruebaLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(fase_prueba);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function fase_pruebaLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fase_testeo;
function fase_testeoLoopBegin(fase_testeoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    fase_testeo = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 216, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'fase_testeo'
    });
    psychoJS.experiment.addLoop(fase_testeo); // add the loop to the experiment
    currentLoop = fase_testeo;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFase_testeo of fase_testeo) {
      snapshot = fase_testeo.getSnapshot();
      fase_testeoLoopScheduler.add(importConditions(snapshot));
      fase_testeoLoopScheduler.add(rutina_fixRoutineBegin(snapshot));
      fase_testeoLoopScheduler.add(rutina_fixRoutineEachFrame());
      fase_testeoLoopScheduler.add(rutina_fixRoutineEnd(snapshot));
      fase_testeoLoopScheduler.add(trial_testeoRoutineBegin(snapshot));
      fase_testeoLoopScheduler.add(trial_testeoRoutineEachFrame());
      fase_testeoLoopScheduler.add(trial_testeoRoutineEnd(snapshot));
      fase_testeoLoopScheduler.add(EscalaOCRoutineBegin(snapshot));
      fase_testeoLoopScheduler.add(EscalaOCRoutineEachFrame());
      fase_testeoLoopScheduler.add(EscalaOCRoutineEnd(snapshot));
      fase_testeoLoopScheduler.add(fase_testeoLoopEndIteration(fase_testeoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function fase_testeoLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(fase_testeo);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function fase_testeoLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var rutina_fixMaxDurationReached;
var rutina_fixMaxDuration;
var rutina_fixComponents;
function rutina_fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rutina_fix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    rutina_fixClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    rutina_fixMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('rutina_fix.started', globalClock.getTime());
    rutina_fixMaxDuration = null
    // keep track of which components have finished
    rutina_fixComponents = [];
    rutina_fixComponents.push(stim_cruz);
    
    for (const thisComponent of rutina_fixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function rutina_fixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rutina_fix' ---
    // get current time
    t = rutina_fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_cruz* updates
    if (t >= 0.0 && stim_cruz.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_cruz.tStart = t;  // (not accounting for frame time here)
      stim_cruz.frameNStart = frameN;  // exact frame index
      
      stim_cruz.setAutoDraw(true);
    }
    
    
    // if stim_cruz is active this frame...
    if (stim_cruz.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_cruz.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_cruz.tStop = t;  // not accounting for scr refresh
      stim_cruz.frameNStop = frameN;  // exact frame index
      // update status
      stim_cruz.status = PsychoJS.Status.FINISHED;
      stim_cruz.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rutina_fixComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rutina_fixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rutina_fix' ---
    for (const thisComponent of rutina_fixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rutina_fix.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (rutina_fixMaxDurationReached) {
        rutina_fixClock.add(rutina_fixMaxDuration);
    } else {
        rutina_fixClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_pruebaMaxDurationReached;
var red_dots;
var blue_dots;
var correctAns;
var _resp_ptos_allKeys;
var trial_pruebaMaxDuration;
var trial_pruebaComponents;
function trial_pruebaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_prueba' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_pruebaClock.reset();
    routineTimer.reset();
    trial_pruebaMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from trial_prueba
    // --- 1. Selección de parámetros ---
    var diff_keys = Object.keys(window.difficulties);
    util.shuffle(diff_keys);
    var difficulty = diff_keys[0];
    
    var possible_counts = window.difficulties[difficulty];
    util.shuffle(possible_counts);
    var dominant_count = possible_counts[0];
    
    var possible_colors = ['Red', 'Blue'];
    util.shuffle(possible_colors);
    var dominant_color = possible_colors[0];
    
    var red_dots, blue_dots, correctAns;
    
    if (dominant_color === 'Red') {
        red_dots = dominant_count;
        blue_dots = window.nDots - dominant_count;
        correctAns = 'n'; 
    } else {
        blue_dots = dominant_count;
        red_dots = window.nDots - dominant_count;
        correctAns = 'c'; 
    }
    
    // --- 2. Asignación de Coordenadas y Color ---
    var RED_C = new util.Color('red');
    var BLUE_C = new util.Color('blue');
    
    for (var i = 0; i < window.nDots; i++) {
        var theta = Math.random() * 2 * Math.PI;
        var r_val = window.cloudRadius * Math.sqrt(Math.random());
        var x = r_val * Math.cos(theta);
        var y = r_val * Math.sin(theta);
        
        var this_color;
        if (i < red_dots) {
            this_color = RED_C;
        } else {
            this_color = BLUE_C;
        }
        
        // Verificamos que el punto exista antes de tocarlo
        if (window.myDots[i]) {
            window.myDots[i].setPos([x, y]);
            window.myDots[i].setFillColor(this_color);
            window.myDots[i].setLineColor(this_color);
            
            // ¡CRUCIAL! Forzamos setAutoDraw(false)
            // Esto evita que se superpongan si alguno quedó "pegado"
            window.myDots[i].setAutoDraw(false); 
        }
    }
    
    // Guardar datos en el archivo Excel/CSV
    psychoJS.experiment.addData('difficulty', difficulty);
    psychoJS.experiment.addData('dominant_color', dominant_color);
    psychoJS.experiment.addData('dominant_count', dominant_count);
    psychoJS.experiment.addData('correctAns', correctAns);
    resp_ptos.keys = undefined;
    resp_ptos.rt = undefined;
    _resp_ptos_allKeys = [];
    psychoJS.experiment.addData('trial_prueba.started', globalClock.getTime());
    trial_pruebaMaxDuration = null
    // keep track of which components have finished
    trial_pruebaComponents = [];
    trial_pruebaComponents.push(resp_ptos);
    
    for (const thisComponent of trial_pruebaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_pruebaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_prueba' ---
    // get current time
    t = trial_pruebaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from trial_prueba
    // Definimos el límite de tiempo
    var timeLimit = window.stimDuration; // 0.2s
    
    if (t < timeLimit) {
        // --- FASE 1: MOSTRAR ESTÍMULO (0 a 200ms) ---
        for (var i = 0; i < window.nDots; i++) {
            if (window.myDots[i]) {
                // Usamos .draw() para dibujar frame por frame
                window.myDots[i].draw();
            }
        }
    } else {
        // --- FASE 2: PANTALLA GRIS (200ms en adelante) ---
        // El tiempo pasó, así que NO llamamos a .draw().
        
        // MEDIDA DE SEGURIDAD:
        // Forzamos el apagado por si alguno quedó con 'autoDraw' activado accidentalmente.
        // Esto garantiza que desaparezcan visualmente.
        for (var i = 0; i < window.nDots; i++) {
            if (window.myDots[i]) {
                window.myDots[i].setAutoDraw(false);
            }
        }
    }
    
    // *resp_ptos* updates
    if (t >= 0.2 && resp_ptos.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_ptos.tStart = t;  // (not accounting for frame time here)
      resp_ptos.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_ptos.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_ptos.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_ptos.clearEvents(); });
    }
    
    // if resp_ptos is active this frame...
    if (resp_ptos.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_ptos.getKeys({
        keyList: typeof ['c','n'] === 'string' ? [['c','n']] : ['c','n'], 
        waitRelease: false
      });
      _resp_ptos_allKeys = _resp_ptos_allKeys.concat(theseKeys);
      if (_resp_ptos_allKeys.length > 0) {
        resp_ptos.keys = _resp_ptos_allKeys[_resp_ptos_allKeys.length - 1].name;  // just the last key pressed
        resp_ptos.rt = _resp_ptos_allKeys[_resp_ptos_allKeys.length - 1].rt;
        resp_ptos.duration = _resp_ptos_allKeys[_resp_ptos_allKeys.length - 1].duration;
        // was this correct?
        if (resp_ptos.keys == 'correctAns') {
            resp_ptos.corr = 1;
        } else {
            resp_ptos.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_pruebaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_pruebaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_prueba' ---
    for (const thisComponent of trial_pruebaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_prueba.stopped', globalClock.getTime());
    // Run 'End Routine' code from trial_prueba
    for (var i = 0; i < window.nDots; i++) {
        window.myDots[i].setAutoDraw(false);
    }
    
    
    // Registramos cuál era la respuesta correcta ( 'n' o 'c' )
    psychoJS.experiment.addData('correctAns', correctAns);
    
    // El componente de teclado del Builder se encargará de guardar 
    // qué tecla presionó el participante y si acertó (key_resp.corr),
    // pero aquí guardamos explícitamente qué DEBÍA responder.
    // Registramos cuál era la respuesta correcta
    
    // was no response the correct answer?!
    if (resp_ptos.keys === undefined) {
      if (['None','none',undefined].includes('correctAns')) {
         resp_ptos.corr = 1;  // correct non-response
      } else {
         resp_ptos.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_ptos.corr, level);
    }
    psychoJS.experiment.addData('resp_ptos.keys', resp_ptos.keys);
    psychoJS.experiment.addData('resp_ptos.corr', resp_ptos.corr);
    if (typeof resp_ptos.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_ptos.rt', resp_ptos.rt);
        psychoJS.experiment.addData('resp_ptos.duration', resp_ptos.duration);
        routineTimer.reset();
        }
    
    resp_ptos.stop();
    // the Routine "trial_prueba" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var performance_score;
var feedbackText;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from feedback_prueba
    // Obtenemos el número de ensayo actual
    var trialNumber = fase_prueba.thisN + 1;
    
    // Usamos window.blockSize para asegurar que la variable global existe
    var limit = (typeof window.blockSize !== 'undefined') ? window.blockSize : 24; 
    
    if ((trialNumber % limit) === 0) {
        
        // Inicializamos variables
        var performance_score = 0;
        var current_group = (typeof window.group !== 'undefined') ? window.group : 'Control';
        
        // Lógica del puntaje
        if (current_group === 'Experimental') {
            // Random entre 70 y 95
            performance_score = Math.floor(Math.random() * (95 - 70 + 1)) + 70;
            // CORREGIDO: Usamos concatenación (+) para que se vea el número sí o sí
            feedbackText = 'Has alcanzado un desempeño equivalente a los mejores del grupo: ' + performance_score + '%.';
        } else {
            // Random entre 37 y 62
            performance_score = Math.floor(Math.random() * (62 - 37 + 1)) + 37;
            // CORREGIDO: Usamos concatenación (+)
            feedbackText = 'Tu rendimiento se ubica en un rango intermedio del grupo: ' + performance_score + '%.';
        }
    
        // --- ACTUALIZACIÓN VISUAL ---
        // NOTA: En tu archivo anterior el componente se llamaba 'Feedback'. 
        // Si le cambiaste el nombre, ajusta la palabra 'Feedback' aquí abajo.
        if (typeof Feedback !== 'undefined') {
            Feedback.setText(feedbackText);
        }
        
        // Guardar datos
        psychoJS.experiment.addData('block_end_trial', trialNumber);
        psychoJS.experiment.addData('feedback_group', current_group);
        psychoJS.experiment.addData('feedback_score_shown', performance_score);
        
        continueRoutine = true;
    
    } else {
        // Si no es fin de bloque, saltar
        continueRoutine = false;
    }
    Feedback.setText(feedbackText);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(Feedback);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Si la rutina está activa (no la saltamos), contar el tiempo
    if (t > 3.0) {
        continueRoutine = false; // Terminar después de 3 segundos
    }
    
    
    // *Feedback* updates
    if (t >= 0.0 && Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback.tStart = t;  // (not accounting for frame time here)
      Feedback.frameNStart = frameN;  // exact frame index
      
      Feedback.setAutoDraw(true);
    }
    
    
    // if Feedback is active this frame...
    if (Feedback.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instrucciones_testeoMaxDurationReached;
var _Key_instrucciones_test_allKeys;
var Instrucciones_testeoMaxDuration;
var Instrucciones_testeoComponents;
function Instrucciones_testeoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instrucciones_testeo' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instrucciones_testeoClock.reset();
    routineTimer.reset();
    Instrucciones_testeoMaxDurationReached = false;
    // update component parameters for each repeat
    Key_instrucciones_test.keys = undefined;
    Key_instrucciones_test.rt = undefined;
    _Key_instrucciones_test_allKeys = [];
    psychoJS.experiment.addData('Instrucciones_testeo.started', globalClock.getTime());
    Instrucciones_testeoMaxDuration = null
    // keep track of which components have finished
    Instrucciones_testeoComponents = [];
    Instrucciones_testeoComponents.push(testeo_instrucciones);
    Instrucciones_testeoComponents.push(Key_instrucciones_test);
    
    for (const thisComponent of Instrucciones_testeoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instrucciones_testeoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instrucciones_testeo' ---
    // get current time
    t = Instrucciones_testeoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *testeo_instrucciones* updates
    if (t >= 0.0 && testeo_instrucciones.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testeo_instrucciones.tStart = t;  // (not accounting for frame time here)
      testeo_instrucciones.frameNStart = frameN;  // exact frame index
      
      testeo_instrucciones.setAutoDraw(true);
    }
    
    
    // if testeo_instrucciones is active this frame...
    if (testeo_instrucciones.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Key_instrucciones_test* updates
    if (t >= 0.0 && Key_instrucciones_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_instrucciones_test.tStart = t;  // (not accounting for frame time here)
      Key_instrucciones_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_instrucciones_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_instrucciones_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_instrucciones_test.clearEvents(); });
    }
    
    // if Key_instrucciones_test is active this frame...
    if (Key_instrucciones_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_instrucciones_test.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _Key_instrucciones_test_allKeys = _Key_instrucciones_test_allKeys.concat(theseKeys);
      if (_Key_instrucciones_test_allKeys.length > 0) {
        Key_instrucciones_test.keys = _Key_instrucciones_test_allKeys[_Key_instrucciones_test_allKeys.length - 1].name;  // just the last key pressed
        Key_instrucciones_test.rt = _Key_instrucciones_test_allKeys[_Key_instrucciones_test_allKeys.length - 1].rt;
        Key_instrucciones_test.duration = _Key_instrucciones_test_allKeys[_Key_instrucciones_test_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instrucciones_testeoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instrucciones_testeoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instrucciones_testeo' ---
    for (const thisComponent of Instrucciones_testeoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instrucciones_testeo.stopped', globalClock.getTime());
    Key_instrucciones_test.stop();
    // the Routine "Instrucciones_testeo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_testeoMaxDurationReached;
var _resp_testeo_allKeys;
var trial_testeoMaxDuration;
var trial_testeoComponents;
function trial_testeoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_testeo' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_testeoClock.reset();
    routineTimer.reset();
    trial_testeoMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from trial_testeo
    // FASE 2: RECICLAJE DE PUNTOS ---
    
    // 1. SELECCIÓN DE DIFICULTAD Y COLOR (Igual que antes)
    var diff_keys = Object.keys(window.difficulties);
    util.shuffle(diff_keys);
    var difficulty = diff_keys[0];
    
    var possible_counts = window.difficulties[difficulty];
    util.shuffle(possible_counts);
    var dominant_count = possible_counts[0];
    
    var possible_colors = ['Red', 'Blue'];
    util.shuffle(possible_colors);
    var dominant_color = possible_colors[0];
    
    // Definir contadores y respuesta correcta
    var red_dots, blue_dots, correctAns;
    
    if (dominant_color === 'Red') {
        red_dots = dominant_count;
        blue_dots = window.nDots - dominant_count;
        correctAns = 'n'; 
    } else {
        blue_dots = dominant_count;
        red_dots = window.nDots - dominant_count;
        correctAns = 'c'; 
    }
    
    // 2. ACTUALIZACIÓN DE LOS PUNTOS EXISTENTES
    // No creamos 'ElementArrayStim' porque rompe la web.
    // Usamos los puntos individuales (window.myDots) que creamos en la Etapa 1.
    
    var RED_C = new util.Color('red');
    var BLUE_C = new util.Color('blue');
    
    for (var i = 0; i < window.nDots; i++) {
        // A. Matemática: Generar nuevas coordenadas polares
        var theta = Math.random() * 2 * Math.PI;
        var r_val = window.cloudRadius * Math.sqrt(Math.random());
        
        // Convertir a cartesianas (X, Y)
        var x = r_val * Math.cos(theta);
        var y = r_val * Math.sin(theta);
        
        // B. Color: Decidir color de este punto
        var this_color;
        if (i < red_dots) {
            this_color = RED_C;
        } else {
            this_color = BLUE_C;
        }
        
        // C. Aplicar cambios a los puntos GLOBALES
        // Verificamos que el punto exista (debería, porque viene de la etapa 1)
        if (window.myDots[i]) {
            window.myDots[i].setPos([x, y]);
            window.myDots[i].setFillColor(this_color);
            window.myDots[i].setLineColor(this_color);
            
            // ¡CRUCIAL! Aseguramos que NO se dibujen solos (autoDraw false)
            window.myDots[i].setAutoDraw(false); 
        }
    }
    
    // 3. LOGUEO DE DATOS
    psychoJS.experiment.addData('difficulty', difficulty);
    psychoJS.experiment.addData('dominant_color', dominant_color);
    psychoJS.experiment.addData('dominant_count', dominant_count);
    psychoJS.experiment.addData('correctAns', correctAns); // Importante para saber si acertó
    
    // Guardamos grupo por si acaso
    if (typeof window.group !== 'undefined') {
        psychoJS.experiment.addData('group', window.group);
    }
    resp_testeo.keys = undefined;
    resp_testeo.rt = undefined;
    _resp_testeo_allKeys = [];
    psychoJS.experiment.addData('trial_testeo.started', globalClock.getTime());
    trial_testeoMaxDuration = null
    // keep track of which components have finished
    trial_testeoComponents = [];
    trial_testeoComponents.push(resp_testeo);
    
    for (const thisComponent of trial_testeoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_testeoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_testeo' ---
    // get current time
    t = trial_testeoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from trial_testeo
    // Definimos el límite de tiempo
    var timeLimit = window.stimDuration; // 0.2s
    
    if (t < timeLimit) {
        // --- FASE 1: MOSTRAR ESTÍMULO (0 a 200ms) ---
        for (var i = 0; i < window.nDots; i++) {
            if (window.myDots[i]) {
                // Usamos .draw() para dibujar frame por frame
                window.myDots[i].draw();
            }
        }
    } else {
        // --- FASE 2: PANTALLA GRIS (200ms en adelante) ---
        // El tiempo pasó, así que NO llamamos a .draw().
        
        // MEDIDA DE SEGURIDAD:
        // Forzamos el apagado por si alguno quedó con 'autoDraw' activado accidentalmente.
        // Esto garantiza que desaparezcan visualmente.
        for (var i = 0; i < window.nDots; i++) {
            if (window.myDots[i]) {
                window.myDots[i].setAutoDraw(false);
            }
        }
    }
    
    // *resp_testeo* updates
    if (t >= 0.2 && resp_testeo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_testeo.tStart = t;  // (not accounting for frame time here)
      resp_testeo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_testeo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_testeo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_testeo.clearEvents(); });
    }
    
    // if resp_testeo is active this frame...
    if (resp_testeo.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_testeo.getKeys({
        keyList: typeof ['c','n'] === 'string' ? [['c','n']] : ['c','n'], 
        waitRelease: false
      });
      _resp_testeo_allKeys = _resp_testeo_allKeys.concat(theseKeys);
      if (_resp_testeo_allKeys.length > 0) {
        resp_testeo.keys = _resp_testeo_allKeys[_resp_testeo_allKeys.length - 1].name;  // just the last key pressed
        resp_testeo.rt = _resp_testeo_allKeys[_resp_testeo_allKeys.length - 1].rt;
        resp_testeo.duration = _resp_testeo_allKeys[_resp_testeo_allKeys.length - 1].duration;
        // was this correct?
        if (resp_testeo.keys == 'correctAns') {
            resp_testeo.corr = 1;
        } else {
            resp_testeo.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_testeoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_testeoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_testeo' ---
    for (const thisComponent of trial_testeoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_testeo.stopped', globalClock.getTime());
    // Run 'End Routine' code from trial_testeo
    psychoJS.experiment.addData('correctAns', correctAns);
    
    // Registramos el número de trial. 
    // NOTA: Asegurate que 'fase_testeo' sea el nombre REAL de tu loop en el Builder.
    psychoJS.experiment.addData('trial2Number', fase_testeo.thisN + 1);
    // was no response the correct answer?!
    if (resp_testeo.keys === undefined) {
      if (['None','none',undefined].includes('correctAns')) {
         resp_testeo.corr = 1;  // correct non-response
      } else {
         resp_testeo.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_testeo.corr, level);
    }
    psychoJS.experiment.addData('resp_testeo.keys', resp_testeo.keys);
    psychoJS.experiment.addData('resp_testeo.corr', resp_testeo.corr);
    if (typeof resp_testeo.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_testeo.rt', resp_testeo.rt);
        psychoJS.experiment.addData('resp_testeo.duration', resp_testeo.duration);
        routineTimer.reset();
        }
    
    resp_testeo.stop();
    // the Routine "trial_testeo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EscalaOCMaxDurationReached;
var _key_conf_allKeys;
var EscalaOCMaxDuration;
var EscalaOCComponents;
function EscalaOCRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EscalaOC' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EscalaOCClock.reset();
    routineTimer.reset();
    EscalaOCMaxDurationReached = false;
    // update component parameters for each repeat
    // --- FORZAR TEXTO (Solución al Hello World) ---
    
    // 1. Buscamos el texto que definimos al principio (Standard o Reverse)
    // Usamos 'window.' para asegurarnos de encontrar la variable global.
    var texto_final = (typeof window.txt_leyenda_breve !== 'undefined') ? window.txt_leyenda_breve : "ERROR: Variable no encontrada";
    
    // 2. Se lo metemos a la fuerza al componente visual
    if (typeof Escala_confianza !== 'undefined') {
        Escala_confianza.setText(texto_final);
        
        // Forzamos también que se actualice ahora mismo
        Escala_confianza.text = texto_final;
    }
    Escala_confianza.setText(txt_leyenda_breve);
    key_conf.keys = undefined;
    key_conf.rt = undefined;
    _key_conf_allKeys = [];
    psychoJS.experiment.addData('EscalaOC.started', globalClock.getTime());
    EscalaOCMaxDuration = null
    // keep track of which components have finished
    EscalaOCComponents = [];
    EscalaOCComponents.push(Escala_confianza);
    EscalaOCComponents.push(key_conf);
    
    for (const thisComponent of EscalaOCComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EscalaOCRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EscalaOC' ---
    // get current time
    t = EscalaOCClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Escala_confianza* updates
    if (t >= 0.0 && Escala_confianza.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Escala_confianza.tStart = t;  // (not accounting for frame time here)
      Escala_confianza.frameNStart = frameN;  // exact frame index
      
      Escala_confianza.setAutoDraw(true);
    }
    
    
    // if Escala_confianza is active this frame...
    if (Escala_confianza.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_conf* updates
    if (t >= 0.0 && key_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_conf.tStart = t;  // (not accounting for frame time here)
      key_conf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_conf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_conf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_conf.clearEvents(); });
    }
    
    // if key_conf is active this frame...
    if (key_conf.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_conf.getKeys({
        keyList: typeof ['1','2','3','8','9','0'] === 'string' ? [['1','2','3','8','9','0']] : ['1','2','3','8','9','0'], 
        waitRelease: false
      });
      _key_conf_allKeys = _key_conf_allKeys.concat(theseKeys);
      if (_key_conf_allKeys.length > 0) {
        key_conf.keys = _key_conf_allKeys[_key_conf_allKeys.length - 1].name;  // just the last key pressed
        key_conf.rt = _key_conf_allKeys[_key_conf_allKeys.length - 1].rt;
        key_conf.duration = _key_conf_allKeys[_key_conf_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EscalaOCComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var ckey;
var level;
var label;
function EscalaOCRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EscalaOC' ---
    for (const thisComponent of EscalaOCComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('EscalaOC.stopped', globalClock.getTime());
    // Run 'End Routine' code from escala_testeo
    // --- CÓDIGO CORREGIDO PARA GUARDAR DATOS DE CONFIANZA ---
    
    // 1. RECUPERAR EL MAPA GLOBAL (¡Esta es la corrección clave!)
    // Usamos el mapa que se decidió al principio del experimento (Standard o Reverse)
    // Si por alguna razón no existe, usamos un fallback para que no falle.
    var map_to_use = (typeof window.active_conf_map !== 'undefined') ? window.active_conf_map : { '1': 1, '2': 2, '3': 3, '8': 4, '9': 5, '0': 6 };
    
    // 2. Definir las etiquetas de significado
    // Esto SI queda fijo, porque el "Nivel 6" siempre significa "Seguro Correcto",
    // sin importar qué tecla se usó para llegar a él.
    var confidence_labels = {
        1: 'Seguramente Incorrecto',
        2: 'Probablemente Incorrecto',
        3: 'Tal vez sea Incorrecto',
        4: 'Tal vez sea Correcto',
        5: 'Probablemente Correcto',
        6: 'Seguramente Correcto'
    };
    
    // 3. Obtener la tecla presionada
    var ckey = key_conf.keys; // Asegurate que tu componente se llame 'key_conf'
    if (Array.isArray(ckey)) {
        ckey = ckey[ckey.length - 1]; // Tomar la última si hay varias
    }
    
    // 4. Obtener el NIVEL usando el MAPA DINÁMICO
    // Aquí ocurre la magia: 
    // Si es Standard: Tecla '1' -> Nivel 1 (Incorrecto)
    // Si es Reverse:  Tecla '1' -> Nivel 6 (Correcto)
    var level = map_to_use[ckey];
    
    // Validación por si apretaron una tecla rara o nada
    if (level === undefined) {
        level = 'NA';
    }
    
    // 5. Obtener la etiqueta de texto basada en el nivel calculado
    var label = confidence_labels[level];
    if (label === undefined) {
        label = 'NA';
    }
    
    // 6. Guardar datos en el archivo
    psychoJS.experiment.addData('confidence_key', ckey);   // Qué tecla tocó (ej: '1')
    psychoJS.experiment.addData('confidence_level', level); // Qué valor numérico real tiene (1-6)
    psychoJS.experiment.addData('confidence_label', label); // Qué significa (ej: 'Seguramente Correcto')
    
    // Debug para que veas en la consola si funciona (F12)
    console.log(`Tecla: ${ckey} | Mapa: ${window.scale_order} | Nivel: ${level}`);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_conf.corr, level);
    }
    psychoJS.experiment.addData('key_conf.keys', key_conf.keys);
    if (typeof key_conf.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_conf.rt', key_conf.rt);
        psychoJS.experiment.addData('key_conf.duration', key_conf.duration);
        routineTimer.reset();
        }
    
    key_conf.stop();
    // the Routine "EscalaOC" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var despedidaMaxDurationReached;
var despedidaMaxDuration;
var despedidaComponents;
function despedidaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'despedida' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    despedidaClock.reset();
    routineTimer.reset();
    despedidaMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('despedida.started', globalClock.getTime());
    despedidaMaxDuration = null
    // keep track of which components have finished
    despedidaComponents = [];
    
    for (const thisComponent of despedidaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function despedidaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'despedida' ---
    // get current time
    t = despedidaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of despedidaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function despedidaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'despedida' ---
    for (const thisComponent of despedidaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('despedida.stopped', globalClock.getTime());
    // --- CÓDIGO DE GUARDADO (DataPipe) ---
    
    // 1. Generar nombre de archivo (Versión segura con sumas '+')
    // Esto evita el error de sintaxis del signo $
    var filename = expInfo['legajo'] + "_" + expInfo['date'] + ".csv";
    
    // 2. Extraer datos del experimento
    var dataContent = psychoJS.experiment._trialsData;
    var dataJSON = JSON.stringify(dataContent);
    
    // 3. Enviar a DataPipe
    // Asegurate que la variable 'dataPipeID' esté definida en 'Begin Experiment'
    // Si no, reemplaza dataPipeID por tu ID entre comillas (ej: "tu-id-largo")
    fetch("https://pipe.jspsych.org/api/data/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
        },
        body: JSON.stringify({
            experimentID: dataPipeID, 
            filename: filename,
            data: dataJSON,
        }),
    }).then(function(response) {
        console.log("Datos enviados. Status:", response.status);
    }).catch(function(error) {
        console.log("Error al enviar:", error);
    });
    
    // Mensaje para ti en la consola
    console.log("Intentando guardar archivo: " + filename);
    // the Routine "despedida" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
