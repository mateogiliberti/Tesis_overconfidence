/************************************* 
 * Discriminacion De Ptos_Final *
 *************************************/


// store info about the experiment session:
let expName = 'Discriminacion de ptos_final';  // from the Builder filename that created this script
let expInfo = {
    'session': '001',
    'numero de legajo': '',
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
flowScheduler.add(Bienvenida_2RoutineBegin());
flowScheduler.add(Bienvenida_2RoutineEachFrame());
flowScheduler.add(Bienvenida_2RoutineEnd());
flowScheduler.add(InstruccionRoutineBegin());
flowScheduler.add(InstruccionRoutineEachFrame());
flowScheduler.add(InstruccionRoutineEnd());
flowScheduler.add(asignacion_de_gruposRoutineBegin());
flowScheduler.add(asignacion_de_gruposRoutineEachFrame());
flowScheduler.add(asignacion_de_gruposRoutineEnd());
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




flowScheduler.add(DespedidaRoutineBegin());
flowScheduler.add(DespedidaRoutineEachFrame());
flowScheduler.add(DespedidaRoutineEnd());
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


var Bienvenida_2Clock;
var text;
var key_resp_2;
var InstruccionClock;
var text_instructions;
var key_instrucciones;
var asignacion_de_gruposClock;
var pid;
var group;
var txt_instrucciones_escala;
var txt_leyenda_breve;
var rutina_fixClock;
var stim_cruz;
var trial_pruebaClock;
var nDots;
var stimDuration;
var cloudRadius;
var dotSize;
var difficulties;
var myDots;
var resp_ptos;
var Feedback_2Clock;
var Feedback;
var Instrucciones_testeoClock;
var testeo_instrucciones;
var Key_instrucciones_test;
var trial_testeoClock;
var dot_stim;
var resp_testeo;
var Escala_de_confianza_1Clock;
var Escala_confianza;
var key_conf;
var DespedidaClock;
var text_despedida;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Bienvenida_2"
  Bienvenida_2Clock = new util.Clock();
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
  
  // Initialize components for Routine "asignacion_de_grupos"
  asignacion_de_gruposClock = new util.Clock();
  // Run 'Begin Experiment' code from asignacion_grupos
  // --- 1. ASIGNACIÓN DE GRUPO ---
  var raw_id = expInfo['participant']; 
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
  // --- Parámetros generales ---
  nDots = 80; 
  stimDuration = 0.2; // 200 ms
  cloudRadius = 0.30; 
  dotSize = 0.015; // Tamaño (diámetro aproximado)
  
  // --- Diccionario de dificultades ---
  difficulties = {
      'Easy': [61, 62, 63, 64, 65],
      'Average': [51, 52, 53, 54, 55],
      'Difficult': [41, 42, 43, 44, 45]
  };
  
  // --- Inicialización de los puntos (Reemplazo de ElementArrayStim) ---
  // Creamos un array vacío para guardar nuestros objetos "punto"
  myDots = [];
  
  // Creamos los 80 puntos (objetos visual.Polygon)
  for (var i = 0; i < nDots; i++) {
      let newDot = new visual.Polygon({
          win: psychoJS.window,
          name: 'dot_' + i,
          units: 'height',
          edges: 32, // 32 bordes para que parezca un círculo suave
          radius: dotSize / 2, // El radio es la mitad del tamaño
          ori: 0,
          pos: [0, 0], // Posición temporal
          lineWidth: 1,
          lineColor: new util.Color('white'),
          fillColor: new util.Color('white'),
          opacity: 1,
          depth: 0,
          interpolate: true,
      });
      
      // Lo agregamos a nuestra lista
      myDots.push(newDot);
  }
  resp_ptos = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_2"
  Feedback_2Clock = new util.Clock();
  Feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Definimos las constantes aquí para evitar errores
  window.blockSize = 24;    // Tamaño del bloque
  window.feedbackText = ""; // Texto vacío al inicio
  
  // Creamos el reloj manualmente para evitar el ReferenceError
  window.FeedbackClock = new util.Clock();
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
  // Parámetros generales (Asegúrate que coincidan con los que usas en Python)
  nDots = 80;  // O el número que estés usando
  stimDuration = 0.2; // 200ms
  cloudRadius = 0.30;
  dotSize = 0.015;
  
  // Diccionario de dificultades (Copia esto si no es global ya)
  difficulties = {
      'Easy': [61, 62, 63, 64, 65],
      'Average': [51, 52, 53, 54, 55],
      'Difficult': [41, 42, 43, 44, 45]
  };
  
  // Inicializamos la variable del estímulo vacía
  dot_stim = undefined;
  resp_testeo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Escala_de_confianza_1"
  Escala_de_confianza_1Clock = new util.Clock();
  Escala_confianza = new visual.TextStim({
    win: psychoJS.window,
    name: 'Escala_confianza',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_conf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Despedida"
  DespedidaClock = new util.Clock();
  text_despedida = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_despedida',
    text: '!Buenisimo! Completaste la primera etapa del experimento. \nAhora aguarda hasta recibir las instrucciones sobre como continuar. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Tu ID de DataPipe 
  var dataPipeID = "ASnLrtHTzzul";
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Bienvenida_2MaxDurationReached;
var _key_resp_2_allKeys;
var Bienvenida_2MaxDuration;
var Bienvenida_2Components;
function Bienvenida_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Bienvenida_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Bienvenida_2Clock.reset();
    routineTimer.reset();
    Bienvenida_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('Bienvenida_2.started', globalClock.getTime());
    Bienvenida_2MaxDuration = null
    // keep track of which components have finished
    Bienvenida_2Components = [];
    Bienvenida_2Components.push(text);
    Bienvenida_2Components.push(key_resp_2);
    
    Bienvenida_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Bienvenida_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Bienvenida_2' ---
    // get current time
    t = Bienvenida_2Clock.getTime();
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
    Bienvenida_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Bienvenida_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Bienvenida_2' ---
    Bienvenida_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Bienvenida_2.stopped', globalClock.getTime());
    key_resp_2.stop();
    // the Routine "Bienvenida_2" was not non-slip safe, so reset the non-slip timer
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
    
    InstruccionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    InstruccionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    InstruccionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var asignacion_de_gruposMaxDurationReached;
var asignacion_de_gruposMaxDuration;
var asignacion_de_gruposComponents;
function asignacion_de_gruposRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'asignacion_de_grupos' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    asignacion_de_gruposClock.reset();
    routineTimer.reset();
    asignacion_de_gruposMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('asignacion_de_grupos.started', globalClock.getTime());
    asignacion_de_gruposMaxDuration = null
    // keep track of which components have finished
    asignacion_de_gruposComponents = [];
    
    asignacion_de_gruposComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function asignacion_de_gruposRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'asignacion_de_grupos' ---
    // get current time
    t = asignacion_de_gruposClock.getTime();
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
    asignacion_de_gruposComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function asignacion_de_gruposRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'asignacion_de_grupos' ---
    asignacion_de_gruposComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('asignacion_de_grupos.stopped', globalClock.getTime());
    // the Routine "asignacion_de_grupos" was not non-slip safe, so reset the non-slip timer
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
    fase_prueba.forEach(function() {
      snapshot = fase_prueba.getSnapshot();
    
      fase_pruebaLoopScheduler.add(importConditions(snapshot));
      fase_pruebaLoopScheduler.add(rutina_fixRoutineBegin(snapshot));
      fase_pruebaLoopScheduler.add(rutina_fixRoutineEachFrame());
      fase_pruebaLoopScheduler.add(rutina_fixRoutineEnd(snapshot));
      fase_pruebaLoopScheduler.add(trial_pruebaRoutineBegin(snapshot));
      fase_pruebaLoopScheduler.add(trial_pruebaRoutineEachFrame());
      fase_pruebaLoopScheduler.add(trial_pruebaRoutineEnd(snapshot));
      fase_pruebaLoopScheduler.add(Feedback_2RoutineBegin(snapshot));
      fase_pruebaLoopScheduler.add(Feedback_2RoutineEachFrame());
      fase_pruebaLoopScheduler.add(Feedback_2RoutineEnd(snapshot));
      fase_pruebaLoopScheduler.add(fase_pruebaLoopEndIteration(fase_pruebaLoopScheduler, snapshot));
    });
    
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
    fase_testeo.forEach(function() {
      snapshot = fase_testeo.getSnapshot();
    
      fase_testeoLoopScheduler.add(importConditions(snapshot));
      fase_testeoLoopScheduler.add(rutina_fixRoutineBegin(snapshot));
      fase_testeoLoopScheduler.add(rutina_fixRoutineEachFrame());
      fase_testeoLoopScheduler.add(rutina_fixRoutineEnd(snapshot));
      fase_testeoLoopScheduler.add(trial_testeoRoutineBegin(snapshot));
      fase_testeoLoopScheduler.add(trial_testeoRoutineEachFrame());
      fase_testeoLoopScheduler.add(trial_testeoRoutineEnd(snapshot));
      fase_testeoLoopScheduler.add(Escala_de_confianza_1RoutineBegin(snapshot));
      fase_testeoLoopScheduler.add(Escala_de_confianza_1RoutineEachFrame());
      fase_testeoLoopScheduler.add(Escala_de_confianza_1RoutineEnd(snapshot));
      fase_testeoLoopScheduler.add(fase_testeoLoopEndIteration(fase_testeoLoopScheduler, snapshot));
    });
    
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
    
    rutina_fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    rutina_fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    rutina_fixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    // --- 1. Selección de parámetros (Lógica original intacta) ---
    var diff_keys = Object.keys(difficulties);
    util.shuffle(diff_keys);
    var difficulty = diff_keys[0];
    
    var possible_counts = difficulties[difficulty];
    util.shuffle(possible_counts);
    var dominant_count = possible_counts[0];
    
    var possible_colors = ['Red', 'Blue'];
    util.shuffle(possible_colors);
    var dominant_color = possible_colors[0];
    
    var red_dots, blue_dots, correctAns;
    if (dominant_color === 'Red') {
        red_dots = dominant_count;
        blue_dots = nDots - dominant_count;
        correctAns = 'n'; 
    } else {
        blue_dots = dominant_count;
        red_dots = nDots - dominant_count;
        correctAns = 'c'; 
    }
    
    // --- 2. Generación de Coordenadas y Asignación ---
    // Definimos los colores
    var RED_C = new util.Color('red');
    var BLUE_C = new util.Color('blue');
    
    // Iteramos sobre los 80 puntos que creamos en Begin Experiment
    for (var i = 0; i < nDots; i++) {
        // Generar posición aleatoria (Tu lógica original)
        var theta = Math.random() * 2 * Math.PI;
        var r_val = cloudRadius * Math.sqrt(Math.random());
        var x = r_val * Math.cos(theta);
        var y = r_val * Math.sin(theta);
        
        // Determinar color
        var this_color;
        if (i < red_dots) {
            this_color = RED_C;
        } else {
            this_color = BLUE_C;
        }
        
        // --- ACTUALIZAMOS EL PUNTO ---
        // En lugar de crear un array temporal, actualizamos el objeto directamente
        myDots[i].setPos([x, y]);
        myDots[i].setFillColor(this_color);
        myDots[i].setLineColor(this_color);
        // Aseguramos que no se dibuje automáticamente todavía
        myDots[i].setAutoDraw(false); 
    }
    
    // Guardar datos
    psychoJS.experiment.addData('difficulty', difficulty);
    psychoJS.experiment.addData('dominant_color', dominant_color);
    psychoJS.experiment.addData('dominant_count', dominant_count);
    if (typeof window.group !== 'undefined') {
        psychoJS.experiment.addData('group', window.group);
    }
    resp_ptos.keys = undefined;
    resp_ptos.rt = undefined;
    _resp_ptos_allKeys = [];
    psychoJS.experiment.addData('trial_prueba.started', globalClock.getTime());
    trial_pruebaMaxDuration = null
    // keep track of which components have finished
    trial_pruebaComponents = [];
    trial_pruebaComponents.push(resp_ptos);
    
    trial_pruebaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    // t es el tiempo actual de la rutina
    if (t < 0,2) {
        // Dibujamos cada punto de la lista
        for (var i = 0; i < nDots; i++) {
            myDots[i].draw();
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
    trial_pruebaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trial_pruebaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_prueba.stopped', globalClock.getTime());
    // Run 'End Routine' code from trial_prueba
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


var Feedback_2MaxDurationReached;
var performance_score;
var feedbackText;
var Feedback_2MaxDuration;
var Feedback_2Components;
function Feedback_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Feedback_2Clock.reset();
    routineTimer.reset();
    Feedback_2MaxDurationReached = false;
    // update component parameters for each repeat
    Feedback.setText(feedbackText);
    // Run 'Begin Routine' code from feedback_prueba
    // Obtenemos el número de ensayo actual
    // IMPORTANTE: Asegúrate de que 'fase_prueba' es el nombre real de tu loop en el Builder.
    var trialNumber = fase_prueba.thisN + 1;
    var performance_score = 0;
    
    // Verificamos si es fin de bloque (múltiplo de 24)
    if ((trialNumber % window.blockSize) === 0) {
    
        // --- Generar puntaje falso ---
        // Si la variable 'group' no está definida, asumimos 'Control' por seguridad
        // o usamos window.group si la definimos globalmente antes.
        var current_group = (typeof window.group !== 'undefined') ? window.group : 'Control';
    
        if (current_group === 'Experimental') {
            // Random entre 70 y 95
            performance_score = Math.floor(Math.random() * (95 - 70 + 1)) + 70;
            feedbackText = `Has alcanzado un desempeño equivalente a los mejores del grupo: ${performance_score}%.`;
        } else {
            // Random entre 37 y 62
            performance_score = Math.floor(Math.random() * (62 - 37 + 1)) + 37;
            feedbackText = `Tu rendimiento se ubica en un rango intermedio del grupo: ${performance_score}%.`;
        }
    
        // --- Guardar datos ---
        psychoJS.experiment.addData('block_end_trial', trialNumber);
        psychoJS.experiment.addData('feedback_group', current_group);
        psychoJS.experiment.addData('feedback_score_shown', performance_score);
    
        // Activamos la rutina (esto es redundante pero seguro)
        continueRoutine = true;
    
    } else {
        // --- Ocultar Feedback ---
        // Si NO es el ensayo 24, 48, 72, etc., saltamos esta pantalla inmediatamente
        continueRoutine = false;
    }
    psychoJS.experiment.addData('Feedback_2.started', globalClock.getTime());
    Feedback_2MaxDuration = null
    // keep track of which components have finished
    Feedback_2Components = [];
    Feedback_2Components.push(Feedback);
    
    Feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Feedback_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_2' ---
    // get current time
    t = Feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
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
    
    // Si la rutina está activa (no la saltamos), contar el tiempo
    if (t > 3.0) {
        continueRoutine = false; // Terminar después de 3 segundos
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
    Feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_2' ---
    Feedback_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Feedback_2.stopped', globalClock.getTime());
    // the Routine "Feedback_2" was not non-slip safe, so reset the non-slip timer
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
    
    Instrucciones_testeoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    Instrucciones_testeoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    Instrucciones_testeoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    // --- 1. SELECCIÓN DE DIFICULTAD Y COLOR ---
    
    // Elegir dificultad
    var diff_keys = Object.keys(difficulties);
    util.shuffle(diff_keys);
    var difficulty = diff_keys[0];
    
    // Elegir cantidad dominante
    var possible_counts = difficulties[difficulty];
    util.shuffle(possible_counts);
    var dominant_count = possible_counts[0];
    
    // Elegir color dominante
    var possible_colors = ['Red', 'Blue'];
    util.shuffle(possible_colors);
    var dominant_color = possible_colors[0];
    
    // Definir contadores y respuesta correcta
    var red_dots, blue_dots, correctAns;
    
    if (dominant_color === 'Red') {
        red_dots = dominant_count;
        blue_dots = nDots - dominant_count;
        correctAns = 'n'; 
    } else {
        blue_dots = dominant_count;
        red_dots = nDots - dominant_count;
        correctAns = 'c'; 
    }
    
    // --- 2. GENERACIÓN DE PUNTOS (Matemática) ---
    
    var temp_dots = [];
    // Usamos util.Color para que PsychoPy maneje bien los colores en la web
    var RED_C = new util.Color('red');
    var BLUE_C = new util.Color('blue');
    
    for (var i = 0; i < nDots; i++) {
        // Generar coordenadas polares aleatorias
        var theta = Math.random() * 2 * Math.PI;
        var r_val = cloudRadius * Math.sqrt(Math.random());
        
        // Convertir a cartesianas (X, Y)
        var x = r_val * Math.cos(theta);
        var y = r_val * Math.sin(theta);
        
        // Asignar color
        var this_color;
        if (i < red_dots) {
            this_color = RED_C;
        } else {
            this_color = BLUE_C;
        }
        
        // Guardamos posición y color en un objeto temporal
        temp_dots.push({ pos: [x, y], col: this_color });
    }
    
    // --- 3. MEZCLAR Y SEPARAR ---
    // Esto reemplaza a "np.random.permutation"
    util.shuffle(temp_dots);
    
    var dot_xys = [];
    var dot_colors = [];
    
    for (var i = 0; i < nDots; i++) {
        dot_xys.push(temp_dots[i].pos);
        dot_colors.push(temp_dots[i].col);
    }
    
    // --- 4. CREAR EL ESTÍMULO VISUAL ---
    // Recreamos el objeto en cada trial con las nuevas posiciones
    dot_stim = new visual.ElementArrayStim({
        win: psychoJS.window,
        nElements: nDots,
        sizes: [dotSize, dotSize],
        xys: dot_xys,
        colors: dot_colors,
        elementMask: 'circle',
        units: 'height',
        autoLog: false
    });
    
    // --- 5. LOGUEO DE DATOS ---
    psychoJS.experiment.addData('difficulty', difficulty);
    psychoJS.experiment.addData('dominant_color', dominant_color);
    psychoJS.experiment.addData('dominant_count', dominant_count);
    
    // Intentamos guardar el grupo si existe la variable global
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
    
    trial_testeoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    // Dibujar solo si el tiempo es menor a la duración
    if (t < stimDuration) {
        if (typeof dot_stim !== 'undefined') {
            dot_stim.draw();
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
    trial_testeoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trial_testeoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var Escala_de_confianza_1MaxDurationReached;
var _key_conf_allKeys;
var Escala_de_confianza_1MaxDuration;
var Escala_de_confianza_1Components;
function Escala_de_confianza_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Escala_de_confianza_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Escala_de_confianza_1Clock.reset();
    routineTimer.reset();
    Escala_de_confianza_1MaxDurationReached = false;
    // update component parameters for each repeat
    Escala_confianza.setText(txt_leyenda_breve);
    key_conf.keys = undefined;
    key_conf.rt = undefined;
    _key_conf_allKeys = [];
    psychoJS.experiment.addData('Escala_de_confianza_1.started', globalClock.getTime());
    Escala_de_confianza_1MaxDuration = null
    // keep track of which components have finished
    Escala_de_confianza_1Components = [];
    Escala_de_confianza_1Components.push(Escala_confianza);
    Escala_de_confianza_1Components.push(key_conf);
    
    Escala_de_confianza_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Escala_de_confianza_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Escala_de_confianza_1' ---
    // get current time
    t = Escala_de_confianza_1Clock.getTime();
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
    Escala_de_confianza_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
function Escala_de_confianza_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Escala_de_confianza_1' ---
    Escala_de_confianza_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Escala_de_confianza_1.stopped', globalClock.getTime());
    // Run 'End Routine' code from escala_testeo
    // 1. Definimos el mapeo de teclas a niveles (Objetos en lugar de Diccionarios)
    var confidence_map = {
        '1': 1,
        '2': 2,
        '3': 3,
        '8': 4, 
        '9': 5,
        '0': 6
    };
    
    var confidence_labels = {
        1: 'Seguramente Incorrecto',
        2: 'Probablemente Incorrecto',
        3: 'Tal vez sea Incorrecto',
        4: 'Tal vez sea Correcto',
        5: 'Probablemente Correcto',
        6: 'Seguramente Correcto'
    };
    
    // 2. Obtener la tecla presionada
    // En JS, key_conf.keys puede ser un array ['1'] o un string '1'.
    // Nos aseguramos de tomar el último valor si es un array.
    var ckey = key_conf.keys;
    if (Array.isArray(ckey)) {
        ckey = ckey[ckey.length - 1];
    }
    
    // 3. Obtener el nivel
    // En JS no existe .get(key, default). Se accede con corchetes [].
    var level = confidence_map[ckey];
    
    // Si la tecla no está en el mapa (undefined), asignamos 'NA' o null
    if (level === undefined) {
        level = 'NA';
    }
    
    // 4. Obtener la etiqueta
    var label = confidence_labels[level];
    if (label === undefined) {
        label = 'NA';
    }
    
    // 5. Guardar datos
    psychoJS.experiment.addData('confidence_key', ckey);
    psychoJS.experiment.addData('confidence_level', level);
    psychoJS.experiment.addData('confidence_label', label);
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
    // the Routine "Escala_de_confianza_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DespedidaMaxDurationReached;
var DespedidaMaxDuration;
var DespedidaComponents;
function DespedidaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Despedida' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DespedidaClock.reset();
    routineTimer.reset();
    DespedidaMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Despedida.started', globalClock.getTime());
    DespedidaMaxDuration = null
    // keep track of which components have finished
    DespedidaComponents = [];
    DespedidaComponents.push(text_despedida);
    
    DespedidaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function DespedidaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Despedida' ---
    // get current time
    t = DespedidaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_despedida* updates
    if (t >= 0.0 && text_despedida.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_despedida.tStart = t;  // (not accounting for frame time here)
      text_despedida.frameNStart = frameN;  // exact frame index
      
      text_despedida.setAutoDraw(true);
    }
    
    
    // if text_despedida is active this frame...
    if (text_despedida.status === PsychoJS.Status.STARTED) {
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
    DespedidaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DespedidaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Despedida' ---
    DespedidaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Despedida.stopped', globalClock.getTime());
    // 1. Generar nombre de archivo único
    var filename = `${expInfo['participant']}_${expInfo['date']}.csv`;
    
    // 2. Extraer datos del experimento
    // PsychoJS guarda los datos en _trialsData
    var dataContent = psychoJS.experiment._trialsData;
    
    // Convertir a CSV (PsychoJS suele tener un formato JSON interno, 
    // DataPipe acepta JSON o CSV. Enviamos JSON crudo y DataPipe lo convierte 
    // o lo guardamos como texto).
    // Una forma simple para DataPipe es enviar el JSON completo:
    var dataJSON = JSON.stringify(dataContent);
    
    // 3. Enviar a DataPipe (Fetch API)
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
    }).then(response => {
        console.log("Datos enviados. Status:", response.status);
    });
    
    // Nota: Esto ocurre en milisegundos.
    // the Routine "Despedida" was not non-slip safe, so reset the non-slip timer
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
