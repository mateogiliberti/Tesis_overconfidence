#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2025.2.3),
    on febrero 09, 2026, at 19:03
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2025.2.3'
expName = 'Discriminacion de ptos_final'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'session': '001',
    'numero de legajo': '',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1024, 768)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['numero de legajo'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\matug\\OneDrive\\Documentos\\UdeSA\\Tesis\\Tarea PsychoPy\\Version final - Github\\Discriminacion de ptos_final_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Bienvenida_2" ---
    text = visual.TextStim(win=win, name='text',
        text='Bienvenido/a al experimento.\n\n\n\nVas a participar en un estudio sobre toma de decisiones perceptivas. Tu tarea principal consistirá en observar nubes de puntos de dos colores (rojo y azul) y decidir rápidamente cuál de los dos colores es más numeroso.\n\nEl experimento consta de dos etapas. A continuación, recibirás las instrucciones detalladas para la primera etapa.\n\n\n\nPresiona la BARRA ESPACIADORA para continuar.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2 = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "Instruccion" ---
    text_instructions = visual.TextStim(win=win, name='text_instructions',
        text='En cada ensayo verás una caja con puntos rojos y azules mezclados. Tu objetivo es identificar el color dominante (el que tiene más puntos).\n\n\nTeclas de respuesta:\n\n- Presiona C si hay más puntos AZULES.\n\n\n- Presiona N si hay más puntos ROJOS.\n\nTendras un total de 10 segundos para responder  \n\n\nFeedback de Desempeño: \nAl final de cada bloque de 24 ensayos, verás una pantalla con resultados. Estos indicarán tu desempeño (precisión y velocidad) comparado con un grupo de participantes que realizó este estudio anteriormente.\n\n\n\nPresiona la BARRA ESPACIADORA para comenzar.\n',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_instrucciones = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "asignacion_de_grupos" ---
    # Run 'Begin Experiment' code from asignacion_grupos
    import re
    import random
    
    # --- 1. ASIGNACIÓN DE GRUPO (Paridad de ID) ---
    raw_id = expInfo.get('numero de legajo')
    
    # Extrae sólo los dígitos
    digits = re.findall(r'\d+', str(raw_id))
    pid = int(''.join(digits)) if digits else None
    
    if pid is None:
        group = 'Control'
        group_assignment_method = 'fallback_no_id'
    else:
        group = 'Experimental' if (pid % 2 == 0) else 'Control'
        group_assignment_method = 'parity_id'
    
    thisExp.addData('entered_id_raw', raw_id)
    thisExp.addData('entered_id_parsed', pid)
    thisExp.addData('assigned_group', group)
    thisExp.addData('group_assignment_method', group_assignment_method)
    
    
    # --- 2. CONTRABALANCEO DE ESCALA ---
    # Elegimos al azar entre Standard y Reverse
    scale_order = random.choice(['Standard', 'Reverse'])
    thisExp.addData('scale_order', scale_order)
    
    # Definimos los mapas
    map_standard = {'1': 1, '2': 2, '3': 3, '8': 4, '9': 5, '0': 6}
    map_reverse  = {'1': 6, '2': 5, '3': 4, '8': 3, '9': 2, '0': 1}
    
    # Seleccionamos el mapa activo según el sorteo
    if scale_order == 'Standard':
        active_conf_map = map_standard
    else:
        active_conf_map = map_reverse
    
    
    # --- 3. DEFINIR TEXTOS (Instrucciones y Leyendas) ---
    # Usamos las mismas variables que en JS para que el componente de Texto funcione igual
    
    if scale_order == 'Standard':
        # TEXTO LARGO (Instrucciones)
        txt_instrucciones_escala = (
            "IZQUIERDA (1-2-3) = Poca Confianza\n"
            "DERECHA (8-9-0) = Mucha Confianza\n\n"
            "1: Seguramente Incorrecto\n"
            "2: Probablemente Incorrecto\n"
            "3: Tal vez Incorrecto\n\n"
            "8: Tal vez Correcto\n"
            "9: Probablemente Correcto\n"
            "0: Seguramente Correcto"
        )
        
        # TEXTO CORTO (Leyenda en cada trial)
        txt_leyenda_breve = (
            "Indica tu confianza:\n"
            "1=Seg. Incorrecto   2=Prob. Incorrecto   3=Tal vez Incorrecto\n"
            "8=Tal vez Correcto   9=Prob. Correcto   0=Seg. Correcto"
        )
    
    else:
        # TEXTO LARGO (Reverso)
        txt_instrucciones_escala = (
            "IZQUIERDA (1-2-3) = Mucha Confianza\n"
            "DERECHA (8-9-0) = Poca Confianza\n\n"
            "1: Seguramente Correcto\n"
            "2: Probablemente Correcto\n"
            "3: Tal vez Correcto\n\n"
            "8: Tal vez Incorrecto\n"
            "9: Probablemente Incorrecto\n"
            "0: Seguramente Incorrecto"
        )
    
        # TEXTO CORTO (Reverso)
        txt_leyenda_breve = (
            "Indica tu confianza:\n"
            "1=Seg. Correcto   2=Prob. Correcto   3=Tal vez Correcto\n"
            "8=Tal vez Incorrecto   9=Prob. Incorrecto   0=Seg. Incorrecto"
        )
    
    # --- Initialize components for Routine "rutina_fix" ---
    stim_cruz = visual.TextStim(win=win, name='stim_cruz',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "trial_prueba" ---
    # Run 'Begin Experiment' code from trial_prueba
    import numpy as np
    import random
    
    # Parámetros generales
    nDots = 80
    difficulties = {
        'Easy': [61, 62, 63, 64, 65],
        'Average': [51, 52, 53, 54, 55],
        'Difficult': [41, 42, 43, 44, 45]
    }
    stimDuration = 0.2  # 200 ms
    blockSize = 24
    
    # Parámetros visuales (asumiendo units='height')
    cloudRadius = 0.30   # radio del campo de puntos (ajústalo si lo ves grande/pequeño)
    dotSize = 0.015      # tamaño de cada punto (en units de 'height')
    
    # Colores en rgb255 (más robusto para ElementArrayStim con matriz por elemento)
    RED = [255, 0, 0]
    BLUE = [0, 0, 255]
    
    # Variable de feedback compartida
    feedbackText = ""
    resp_ptos = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "Feedback_" ---
    Feedback = visual.TextStim(win=win, name='Feedback',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "Instrucciones_testeo" ---
    testeo_instrucciones = visual.TextStim(win=win, name='testeo_instrucciones',
        text='Fin de la Etapa 1.\n\nA partir de ahora comienza la segunda etapa. La tarea visual sigue siendo la misma: indicar si hay más puntos rojos o azules usando las teclas N y C, respectivamente. \nPero a diferencia de la etapa anterior, ya NO recibirás feedback sobre tu desempeño al final de los bloques.  En su lugar, te pediremos que evalúes tu Nivel de Confianza después de cada decisión.\n Es decir, tendrás que indicarnos qué tan seguro/a estás de que tu respuesta anterior fue correcta o incorrecta.\n\nPresiona la BARRA ESPACIADORA para comenzar.\n',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.045, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    Key_instrucciones_test = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "rutina_fix" ---
    stim_cruz = visual.TextStim(win=win, name='stim_cruz',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "trial_testeo" ---
    resp_testeo = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "Escala_de_confianza_1" ---
    Escala_confianza = visual.TextStim(win=win, name='Escala_confianza',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_conf = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "Despedida" ---
    text_despedida = visual.TextStim(win=win, name='text_despedida',
        text='!Buenisimo! Completaste la primera etapa del experimento. \nAhora aguarda hasta recibir las instrucciones sobre como continuar. ',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "Bienvenida_2" ---
    # create an object to store info about Routine Bienvenida_2
    Bienvenida_2 = data.Routine(
        name='Bienvenida_2',
        components=[text, key_resp_2],
    )
    Bienvenida_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_2
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # store start times for Bienvenida_2
    Bienvenida_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Bienvenida_2.tStart = globalClock.getTime(format='float')
    Bienvenida_2.status = STARTED
    thisExp.addData('Bienvenida_2.started', Bienvenida_2.tStart)
    Bienvenida_2.maxDuration = None
    # keep track of which components have finished
    Bienvenida_2Components = Bienvenida_2.components
    for thisComponent in Bienvenida_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Bienvenida_2" ---
    thisExp.currentRoutine = Bienvenida_2
    Bienvenida_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=Bienvenida_2,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            Bienvenida_2.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if Bienvenida_2.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in Bienvenida_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Bienvenida_2" ---
    for thisComponent in Bienvenida_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Bienvenida_2
    Bienvenida_2.tStop = globalClock.getTime(format='float')
    Bienvenida_2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Bienvenida_2.stopped', Bienvenida_2.tStop)
    thisExp.nextEntry()
    # the Routine "Bienvenida_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Instruccion" ---
    # create an object to store info about Routine Instruccion
    Instruccion = data.Routine(
        name='Instruccion',
        components=[text_instructions, key_instrucciones],
    )
    Instruccion.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_instrucciones
    key_instrucciones.keys = []
    key_instrucciones.rt = []
    _key_instrucciones_allKeys = []
    # store start times for Instruccion
    Instruccion.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Instruccion.tStart = globalClock.getTime(format='float')
    Instruccion.status = STARTED
    thisExp.addData('Instruccion.started', Instruccion.tStart)
    Instruccion.maxDuration = None
    # keep track of which components have finished
    InstruccionComponents = Instruccion.components
    for thisComponent in Instruccion.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Instruccion" ---
    thisExp.currentRoutine = Instruccion
    Instruccion.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_instructions* updates
        
        # if text_instructions is starting this frame...
        if text_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_instructions.frameNStart = frameN  # exact frame index
            text_instructions.tStart = t  # local t and not account for scr refresh
            text_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_instructions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_instructions.started')
            # update status
            text_instructions.status = STARTED
            text_instructions.setAutoDraw(True)
        
        # if text_instructions is active this frame...
        if text_instructions.status == STARTED:
            # update params
            pass
        
        # *key_instrucciones* updates
        waitOnFlip = False
        
        # if key_instrucciones is starting this frame...
        if key_instrucciones.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instrucciones.frameNStart = frameN  # exact frame index
            key_instrucciones.tStart = t  # local t and not account for scr refresh
            key_instrucciones.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instrucciones, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_instrucciones.started')
            # update status
            key_instrucciones.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instrucciones.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instrucciones.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instrucciones.status == STARTED and not waitOnFlip:
            theseKeys = key_instrucciones.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instrucciones_allKeys.extend(theseKeys)
            if len(_key_instrucciones_allKeys):
                key_instrucciones.keys = _key_instrucciones_allKeys[-1].name  # just the last key pressed
                key_instrucciones.rt = _key_instrucciones_allKeys[-1].rt
                key_instrucciones.duration = _key_instrucciones_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=Instruccion,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            Instruccion.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if Instruccion.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in Instruccion.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instruccion" ---
    for thisComponent in Instruccion.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Instruccion
    Instruccion.tStop = globalClock.getTime(format='float')
    Instruccion.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Instruccion.stopped', Instruccion.tStop)
    thisExp.nextEntry()
    # the Routine "Instruccion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "asignacion_de_grupos" ---
    # create an object to store info about Routine asignacion_de_grupos
    asignacion_de_grupos = data.Routine(
        name='asignacion_de_grupos',
        components=[],
    )
    asignacion_de_grupos.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for asignacion_de_grupos
    asignacion_de_grupos.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    asignacion_de_grupos.tStart = globalClock.getTime(format='float')
    asignacion_de_grupos.status = STARTED
    thisExp.addData('asignacion_de_grupos.started', asignacion_de_grupos.tStart)
    asignacion_de_grupos.maxDuration = None
    # keep track of which components have finished
    asignacion_de_gruposComponents = asignacion_de_grupos.components
    for thisComponent in asignacion_de_grupos.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "asignacion_de_grupos" ---
    thisExp.currentRoutine = asignacion_de_grupos
    asignacion_de_grupos.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=asignacion_de_grupos,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            asignacion_de_grupos.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if asignacion_de_grupos.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in asignacion_de_grupos.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "asignacion_de_grupos" ---
    for thisComponent in asignacion_de_grupos.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for asignacion_de_grupos
    asignacion_de_grupos.tStop = globalClock.getTime(format='float')
    asignacion_de_grupos.tStopRefresh = tThisFlipGlobal
    thisExp.addData('asignacion_de_grupos.stopped', asignacion_de_grupos.tStop)
    thisExp.nextEntry()
    # the Routine "asignacion_de_grupos" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    fase_prueba = data.TrialHandler2(
        name='fase_prueba',
        nReps=120.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(fase_prueba)  # add the loop to the experiment
    thisFase_prueba = fase_prueba.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisFase_prueba.rgb)
    if thisFase_prueba != None:
        for paramName in thisFase_prueba:
            globals()[paramName] = thisFase_prueba[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisFase_prueba in fase_prueba:
        fase_prueba.status = STARTED
        if hasattr(thisFase_prueba, 'status'):
            thisFase_prueba.status = STARTED
        currentLoop = fase_prueba
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisFase_prueba.rgb)
        if thisFase_prueba != None:
            for paramName in thisFase_prueba:
                globals()[paramName] = thisFase_prueba[paramName]
        
        # --- Prepare to start Routine "rutina_fix" ---
        # create an object to store info about Routine rutina_fix
        rutina_fix = data.Routine(
            name='rutina_fix',
            components=[stim_cruz],
        )
        rutina_fix.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for rutina_fix
        rutina_fix.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        rutina_fix.tStart = globalClock.getTime(format='float')
        rutina_fix.status = STARTED
        thisExp.addData('rutina_fix.started', rutina_fix.tStart)
        rutina_fix.maxDuration = None
        # keep track of which components have finished
        rutina_fixComponents = rutina_fix.components
        for thisComponent in rutina_fix.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "rutina_fix" ---
        thisExp.currentRoutine = rutina_fix
        rutina_fix.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # if trial has changed, end Routine now
            if hasattr(thisFase_prueba, 'status') and thisFase_prueba.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim_cruz* updates
            
            # if stim_cruz is starting this frame...
            if stim_cruz.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_cruz.frameNStart = frameN  # exact frame index
                stim_cruz.tStart = t  # local t and not account for scr refresh
                stim_cruz.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_cruz, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stim_cruz.started')
                # update status
                stim_cruz.status = STARTED
                stim_cruz.setAutoDraw(True)
            
            # if stim_cruz is active this frame...
            if stim_cruz.status == STARTED:
                # update params
                pass
            
            # if stim_cruz is stopping this frame...
            if stim_cruz.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim_cruz.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    stim_cruz.tStop = t  # not accounting for scr refresh
                    stim_cruz.tStopRefresh = tThisFlipGlobal  # on global time
                    stim_cruz.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stim_cruz.stopped')
                    # update status
                    stim_cruz.status = FINISHED
                    stim_cruz.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=rutina_fix,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                rutina_fix.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if rutina_fix.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in rutina_fix.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "rutina_fix" ---
        for thisComponent in rutina_fix.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for rutina_fix
        rutina_fix.tStop = globalClock.getTime(format='float')
        rutina_fix.tStopRefresh = tThisFlipGlobal
        thisExp.addData('rutina_fix.stopped', rutina_fix.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if rutina_fix.maxDurationReached:
            routineTimer.addTime(-rutina_fix.maxDuration)
        elif rutina_fix.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "trial_prueba" ---
        # create an object to store info about Routine trial_prueba
        trial_prueba = data.Routine(
            name='trial_prueba',
            components=[resp_ptos],
        )
        trial_prueba.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from trial_prueba
        
        difficulty = random.choice(list(difficulties.keys()))
        dominant_count = random.choice(difficulties[difficulty])
        
        dominant_color = random.choice(['Red', 'Blue'])
        
        if dominant_color == 'Red':
            red_dots = dominant_count
            blue_dots = nDots - dominant_count
            correctAns = 'n'
        else:
            blue_dots = dominant_count
            red_dots = nDots - dominant_count
            correctAns = 'c'
        
        theta = np.random.rand(nDots) * 2 * np.pi
        r = cloudRadius * np.sqrt(np.random.rand(nDots))
        xys = np.column_stack([r * np.cos(theta), r * np.sin(theta)])
        
        colors_array = np.zeros((nDots, 3), dtype=float)
        colors_array[:red_dots, :] = RED
        colors_array[red_dots:, :] = BLUE
        
        perm = np.random.permutation(nDots)
        xys = xys[perm]
        colors_array = colors_array[perm]
        
        dot_stim = visual.ElementArrayStim(
            win,
            nElements=nDots,
            xys=xys,
            elementTex=None,
            elementMask='circle',
            sizes=dotSize,
            colors=colors_array,
            colorSpace='rgb255'
        )
        
        thisExp.addData('difficulty', difficulty)
        thisExp.addData('dominant_color', dominant_color)
        thisExp.addData('dominant_count', dominant_count)
        thisExp.addData('group', group)
        
        # create starting attributes for resp_ptos
        resp_ptos.keys = []
        resp_ptos.rt = []
        _resp_ptos_allKeys = []
        # store start times for trial_prueba
        trial_prueba.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trial_prueba.tStart = globalClock.getTime(format='float')
        trial_prueba.status = STARTED
        thisExp.addData('trial_prueba.started', trial_prueba.tStart)
        trial_prueba.maxDuration = None
        # keep track of which components have finished
        trial_pruebaComponents = trial_prueba.components
        for thisComponent in trial_prueba.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial_prueba" ---
        thisExp.currentRoutine = trial_prueba
        trial_prueba.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisFase_prueba, 'status') and thisFase_prueba.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from trial_prueba
            # Dibujar el estímulo SOLO durante 200 ms desde inicio de la rutina
            # 't' es el tiempo transcurrido en esta rutina (Builder lo da)
            if t < stimDuration:
                dot_stim.draw()
            # Después de 200 ms, la pantalla queda sin el estímulo y se espera respuesta
            
            # *resp_ptos* updates
            waitOnFlip = False
            
            # if resp_ptos is starting this frame...
            if resp_ptos.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
                # keep track of start time/frame for later
                resp_ptos.frameNStart = frameN  # exact frame index
                resp_ptos.tStart = t  # local t and not account for scr refresh
                resp_ptos.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp_ptos, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'resp_ptos.started')
                # update status
                resp_ptos.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(resp_ptos.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(resp_ptos.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if resp_ptos.status == STARTED and not waitOnFlip:
                theseKeys = resp_ptos.getKeys(keyList=['c','n'], ignoreKeys=["escape"], waitRelease=False)
                _resp_ptos_allKeys.extend(theseKeys)
                if len(_resp_ptos_allKeys):
                    resp_ptos.keys = _resp_ptos_allKeys[-1].name  # just the last key pressed
                    resp_ptos.rt = _resp_ptos_allKeys[-1].rt
                    resp_ptos.duration = _resp_ptos_allKeys[-1].duration
                    # was this correct?
                    if (resp_ptos.keys == str('correctAns')) or (resp_ptos.keys == 'correctAns'):
                        resp_ptos.corr = 1
                    else:
                        resp_ptos.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=trial_prueba,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                trial_prueba.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if trial_prueba.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in trial_prueba.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial_prueba" ---
        for thisComponent in trial_prueba.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trial_prueba
        trial_prueba.tStop = globalClock.getTime(format='float')
        trial_prueba.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trial_prueba.stopped', trial_prueba.tStop)
        # Run 'End Routine' code from trial_prueba
        # Registrar a que grupo pertencen 
        thisExp.addData('group', group)
        
        # Registrar la tecla correcta esperada y número de ensayo
        thisExp.addData('correctAns', correctAns)
        thisExp.addData('trialNumber', fase_prueba.thisN + 1)
        
        # check responses
        if resp_ptos.keys in ['', [], None]:  # No response was made
            resp_ptos.keys = None
            # was no response the correct answer?!
            if str('correctAns').lower() == 'none':
               resp_ptos.corr = 1;  # correct non-response
            else:
               resp_ptos.corr = 0;  # failed to respond (incorrectly)
        # store data for fase_prueba (TrialHandler)
        fase_prueba.addData('resp_ptos.keys',resp_ptos.keys)
        fase_prueba.addData('resp_ptos.corr', resp_ptos.corr)
        if resp_ptos.keys != None:  # we had a response
            fase_prueba.addData('resp_ptos.rt', resp_ptos.rt)
            fase_prueba.addData('resp_ptos.duration', resp_ptos.duration)
        # the Routine "trial_prueba" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "Feedback_" ---
        # create an object to store info about Routine Feedback_
        Feedback_ = data.Routine(
            name='Feedback_',
            components=[Feedback],
        )
        Feedback_.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from feedback_prueba
        # Mostrar feedback SOLO al final de cada bloque de 24 ensayos
        trialNumber = fase_prueba.thisN + 1  # thisN es 0-indexado
        if trialNumber % blockSize == 0:
            # Generar puntaje sesgado según el grupo
            if group == 'Experimental':
                performance_score = random.randint(70, 95)
                feedbackText = f'Has alcanzado un desempeño equivalente a los mejores del grupo: {performance_score}%.'
            else:
                performance_score = random.randint(37, 62)
                feedbackText = f'Tu rendimiento se ubica en un rango intermedio del grupo: {performance_score}%.'
            # Registrar el feedback mostrado (opcional)
            thisExp.addData('block_end_trial', trialNumber)
            thisExp.addData('feedback_group', group)
            thisExp.addData('feedback_score_shown', performance_score)
        else:
            # Si no es fin de bloque, saltar esta rutina
            continueRoutine = False
        Feedback.setText(feedbackText
        )
        # store start times for Feedback_
        Feedback_.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        Feedback_.tStart = globalClock.getTime(format='float')
        Feedback_.status = STARTED
        thisExp.addData('Feedback_.started', Feedback_.tStart)
        Feedback_.maxDuration = None
        # keep track of which components have finished
        Feedback_Components = Feedback_.components
        for thisComponent in Feedback_.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Feedback_" ---
        thisExp.currentRoutine = Feedback_
        Feedback_.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 3.0:
            # if trial has changed, end Routine now
            if hasattr(thisFase_prueba, 'status') and thisFase_prueba.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Feedback* updates
            
            # if Feedback is starting this frame...
            if Feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Feedback.frameNStart = frameN  # exact frame index
                Feedback.tStart = t  # local t and not account for scr refresh
                Feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Feedback, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Feedback.started')
                # update status
                Feedback.status = STARTED
                Feedback.setAutoDraw(True)
            
            # if Feedback is active this frame...
            if Feedback.status == STARTED:
                # update params
                pass
            
            # if Feedback is stopping this frame...
            if Feedback.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Feedback.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    Feedback.tStop = t  # not accounting for scr refresh
                    Feedback.tStopRefresh = tThisFlipGlobal  # on global time
                    Feedback.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'Feedback.stopped')
                    # update status
                    Feedback.status = FINISHED
                    Feedback.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=Feedback_,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                Feedback_.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if Feedback_.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in Feedback_.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Feedback_" ---
        for thisComponent in Feedback_.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for Feedback_
        Feedback_.tStop = globalClock.getTime(format='float')
        Feedback_.tStopRefresh = tThisFlipGlobal
        thisExp.addData('Feedback_.stopped', Feedback_.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if Feedback_.maxDurationReached:
            routineTimer.addTime(-Feedback_.maxDuration)
        elif Feedback_.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-3.000000)
        # mark thisFase_prueba as finished
        if hasattr(thisFase_prueba, 'status'):
            thisFase_prueba.status = FINISHED
        # if awaiting a pause, pause now
        if fase_prueba.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            fase_prueba.status = STARTED
        thisExp.nextEntry()
        
    # completed 120.0 repeats of 'fase_prueba'
    fase_prueba.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "Instrucciones_testeo" ---
    # create an object to store info about Routine Instrucciones_testeo
    Instrucciones_testeo = data.Routine(
        name='Instrucciones_testeo',
        components=[testeo_instrucciones, Key_instrucciones_test],
    )
    Instrucciones_testeo.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for Key_instrucciones_test
    Key_instrucciones_test.keys = []
    Key_instrucciones_test.rt = []
    _Key_instrucciones_test_allKeys = []
    # store start times for Instrucciones_testeo
    Instrucciones_testeo.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Instrucciones_testeo.tStart = globalClock.getTime(format='float')
    Instrucciones_testeo.status = STARTED
    thisExp.addData('Instrucciones_testeo.started', Instrucciones_testeo.tStart)
    Instrucciones_testeo.maxDuration = None
    # keep track of which components have finished
    Instrucciones_testeoComponents = Instrucciones_testeo.components
    for thisComponent in Instrucciones_testeo.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Instrucciones_testeo" ---
    thisExp.currentRoutine = Instrucciones_testeo
    Instrucciones_testeo.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *testeo_instrucciones* updates
        
        # if testeo_instrucciones is starting this frame...
        if testeo_instrucciones.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            testeo_instrucciones.frameNStart = frameN  # exact frame index
            testeo_instrucciones.tStart = t  # local t and not account for scr refresh
            testeo_instrucciones.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(testeo_instrucciones, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'testeo_instrucciones.started')
            # update status
            testeo_instrucciones.status = STARTED
            testeo_instrucciones.setAutoDraw(True)
        
        # if testeo_instrucciones is active this frame...
        if testeo_instrucciones.status == STARTED:
            # update params
            pass
        
        # *Key_instrucciones_test* updates
        waitOnFlip = False
        
        # if Key_instrucciones_test is starting this frame...
        if Key_instrucciones_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Key_instrucciones_test.frameNStart = frameN  # exact frame index
            Key_instrucciones_test.tStart = t  # local t and not account for scr refresh
            Key_instrucciones_test.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Key_instrucciones_test, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Key_instrucciones_test.started')
            # update status
            Key_instrucciones_test.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(Key_instrucciones_test.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(Key_instrucciones_test.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if Key_instrucciones_test.status == STARTED and not waitOnFlip:
            theseKeys = Key_instrucciones_test.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _Key_instrucciones_test_allKeys.extend(theseKeys)
            if len(_Key_instrucciones_test_allKeys):
                Key_instrucciones_test.keys = _Key_instrucciones_test_allKeys[-1].name  # just the last key pressed
                Key_instrucciones_test.rt = _Key_instrucciones_test_allKeys[-1].rt
                Key_instrucciones_test.duration = _Key_instrucciones_test_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=Instrucciones_testeo,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            Instrucciones_testeo.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if Instrucciones_testeo.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in Instrucciones_testeo.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instrucciones_testeo" ---
    for thisComponent in Instrucciones_testeo.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Instrucciones_testeo
    Instrucciones_testeo.tStop = globalClock.getTime(format='float')
    Instrucciones_testeo.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Instrucciones_testeo.stopped', Instrucciones_testeo.tStop)
    thisExp.nextEntry()
    # the Routine "Instrucciones_testeo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    fase_testeo = data.TrialHandler2(
        name='fase_testeo',
        nReps=216.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(fase_testeo)  # add the loop to the experiment
    thisFase_testeo = fase_testeo.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisFase_testeo.rgb)
    if thisFase_testeo != None:
        for paramName in thisFase_testeo:
            globals()[paramName] = thisFase_testeo[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisFase_testeo in fase_testeo:
        fase_testeo.status = STARTED
        if hasattr(thisFase_testeo, 'status'):
            thisFase_testeo.status = STARTED
        currentLoop = fase_testeo
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisFase_testeo.rgb)
        if thisFase_testeo != None:
            for paramName in thisFase_testeo:
                globals()[paramName] = thisFase_testeo[paramName]
        
        # --- Prepare to start Routine "rutina_fix" ---
        # create an object to store info about Routine rutina_fix
        rutina_fix = data.Routine(
            name='rutina_fix',
            components=[stim_cruz],
        )
        rutina_fix.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for rutina_fix
        rutina_fix.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        rutina_fix.tStart = globalClock.getTime(format='float')
        rutina_fix.status = STARTED
        thisExp.addData('rutina_fix.started', rutina_fix.tStart)
        rutina_fix.maxDuration = None
        # keep track of which components have finished
        rutina_fixComponents = rutina_fix.components
        for thisComponent in rutina_fix.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "rutina_fix" ---
        thisExp.currentRoutine = rutina_fix
        rutina_fix.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # if trial has changed, end Routine now
            if hasattr(thisFase_testeo, 'status') and thisFase_testeo.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim_cruz* updates
            
            # if stim_cruz is starting this frame...
            if stim_cruz.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_cruz.frameNStart = frameN  # exact frame index
                stim_cruz.tStart = t  # local t and not account for scr refresh
                stim_cruz.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_cruz, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stim_cruz.started')
                # update status
                stim_cruz.status = STARTED
                stim_cruz.setAutoDraw(True)
            
            # if stim_cruz is active this frame...
            if stim_cruz.status == STARTED:
                # update params
                pass
            
            # if stim_cruz is stopping this frame...
            if stim_cruz.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim_cruz.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    stim_cruz.tStop = t  # not accounting for scr refresh
                    stim_cruz.tStopRefresh = tThisFlipGlobal  # on global time
                    stim_cruz.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stim_cruz.stopped')
                    # update status
                    stim_cruz.status = FINISHED
                    stim_cruz.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=rutina_fix,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                rutina_fix.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if rutina_fix.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in rutina_fix.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "rutina_fix" ---
        for thisComponent in rutina_fix.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for rutina_fix
        rutina_fix.tStop = globalClock.getTime(format='float')
        rutina_fix.tStopRefresh = tThisFlipGlobal
        thisExp.addData('rutina_fix.stopped', rutina_fix.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if rutina_fix.maxDurationReached:
            routineTimer.addTime(-rutina_fix.maxDuration)
        elif rutina_fix.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "trial_testeo" ---
        # create an object to store info about Routine trial_testeo
        trial_testeo = data.Routine(
            name='trial_testeo',
            components=[resp_testeo],
        )
        trial_testeo.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from trial_testeo
        # Elegir dificultad y cantidad dominante
        difficulty = random.choice(list(difficulties.keys()))
        dominant_count = random.choice(difficulties[difficulty])
        
        # Elegir color dominante
        dominant_color = random.choice(['Red', 'Blue'])
        
        # Conteos y respuesta correcta
        if dominant_color == 'Red':
            red_dots = dominant_count
            blue_dots = nDots - dominant_count
            correctAns = 'n'
        else:
            blue_dots = dominant_count
            red_dots = nDots - dominant_count
            correctAns = 'c'
        
        # Posiciones en círculo
        theta = np.random.rand(nDots) * 2 * np.pi
        r = cloudRadius * np.sqrt(np.random.rand(nDots))
        xys = np.column_stack([r * np.cos(theta), r * np.sin(theta)])
        
        # Colores por elemento
        colors_array = np.zeros((nDots, 3), dtype=float)
        colors_array[:red_dots, :] = RED
        colors_array[red_dots:, :] = BLUE
        
        # Mezclar
        perm = np.random.permutation(nDots)
        xys = xys[perm]
        colors_array = colors_array[perm]
        
        # Estímulo (usa visual global de Builder)
        dot_stim = visual.ElementArrayStim(
            win,
            nElements=nDots,
            xys=xys,
            elementTex=None,
            elementMask='circle',
            sizes=dotSize,
            colors=colors_array,
            colorSpace='rgb255'
        )
        
        # Log
        thisExp.addData('difficulty', difficulty)
        thisExp.addData('dominant_color', dominant_color)
        thisExp.addData('dominant_count', dominant_count)
        # create starting attributes for resp_testeo
        resp_testeo.keys = []
        resp_testeo.rt = []
        _resp_testeo_allKeys = []
        # store start times for trial_testeo
        trial_testeo.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trial_testeo.tStart = globalClock.getTime(format='float')
        trial_testeo.status = STARTED
        thisExp.addData('trial_testeo.started', trial_testeo.tStart)
        trial_testeo.maxDuration = None
        # keep track of which components have finished
        trial_testeoComponents = trial_testeo.components
        for thisComponent in trial_testeo.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial_testeo" ---
        thisExp.currentRoutine = trial_testeo
        trial_testeo.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisFase_testeo, 'status') and thisFase_testeo.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from trial_testeo
            if t < stimDuration:
                dot_stim.draw()
            
            # *resp_testeo* updates
            waitOnFlip = False
            
            # if resp_testeo is starting this frame...
            if resp_testeo.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
                # keep track of start time/frame for later
                resp_testeo.frameNStart = frameN  # exact frame index
                resp_testeo.tStart = t  # local t and not account for scr refresh
                resp_testeo.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp_testeo, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'resp_testeo.started')
                # update status
                resp_testeo.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(resp_testeo.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(resp_testeo.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if resp_testeo.status == STARTED and not waitOnFlip:
                theseKeys = resp_testeo.getKeys(keyList=['c','n'], ignoreKeys=["escape"], waitRelease=False)
                _resp_testeo_allKeys.extend(theseKeys)
                if len(_resp_testeo_allKeys):
                    resp_testeo.keys = _resp_testeo_allKeys[-1].name  # just the last key pressed
                    resp_testeo.rt = _resp_testeo_allKeys[-1].rt
                    resp_testeo.duration = _resp_testeo_allKeys[-1].duration
                    # was this correct?
                    if (resp_testeo.keys == str('correctAns')) or (resp_testeo.keys == 'correctAns'):
                        resp_testeo.corr = 1
                    else:
                        resp_testeo.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=trial_testeo,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                trial_testeo.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if trial_testeo.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in trial_testeo.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial_testeo" ---
        for thisComponent in trial_testeo.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trial_testeo
        trial_testeo.tStop = globalClock.getTime(format='float')
        trial_testeo.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trial_testeo.stopped', trial_testeo.tStop)
        # Run 'End Routine' code from trial_testeo
        thisExp.addData('correctAns', correctAns)
        thisExp.addData('trial2Number', fase_testeo.thisN + 1)
        # check responses
        if resp_testeo.keys in ['', [], None]:  # No response was made
            resp_testeo.keys = None
            # was no response the correct answer?!
            if str('correctAns').lower() == 'none':
               resp_testeo.corr = 1;  # correct non-response
            else:
               resp_testeo.corr = 0;  # failed to respond (incorrectly)
        # store data for fase_testeo (TrialHandler)
        fase_testeo.addData('resp_testeo.keys',resp_testeo.keys)
        fase_testeo.addData('resp_testeo.corr', resp_testeo.corr)
        if resp_testeo.keys != None:  # we had a response
            fase_testeo.addData('resp_testeo.rt', resp_testeo.rt)
            fase_testeo.addData('resp_testeo.duration', resp_testeo.duration)
        # the Routine "trial_testeo" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "Escala_de_confianza_1" ---
        # create an object to store info about Routine Escala_de_confianza_1
        Escala_de_confianza_1 = data.Routine(
            name='Escala_de_confianza_1',
            components=[Escala_confianza, key_conf],
        )
        Escala_de_confianza_1.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        Escala_confianza.setText(txt_leyenda_breve)
        # create starting attributes for key_conf
        key_conf.keys = []
        key_conf.rt = []
        _key_conf_allKeys = []
        # store start times for Escala_de_confianza_1
        Escala_de_confianza_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        Escala_de_confianza_1.tStart = globalClock.getTime(format='float')
        Escala_de_confianza_1.status = STARTED
        thisExp.addData('Escala_de_confianza_1.started', Escala_de_confianza_1.tStart)
        Escala_de_confianza_1.maxDuration = None
        # keep track of which components have finished
        Escala_de_confianza_1Components = Escala_de_confianza_1.components
        for thisComponent in Escala_de_confianza_1.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Escala_de_confianza_1" ---
        thisExp.currentRoutine = Escala_de_confianza_1
        Escala_de_confianza_1.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisFase_testeo, 'status') and thisFase_testeo.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Escala_confianza* updates
            
            # if Escala_confianza is starting this frame...
            if Escala_confianza.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Escala_confianza.frameNStart = frameN  # exact frame index
                Escala_confianza.tStart = t  # local t and not account for scr refresh
                Escala_confianza.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Escala_confianza, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Escala_confianza.started')
                # update status
                Escala_confianza.status = STARTED
                Escala_confianza.setAutoDraw(True)
            
            # if Escala_confianza is active this frame...
            if Escala_confianza.status == STARTED:
                # update params
                pass
            
            # *key_conf* updates
            waitOnFlip = False
            
            # if key_conf is starting this frame...
            if key_conf.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_conf.frameNStart = frameN  # exact frame index
                key_conf.tStart = t  # local t and not account for scr refresh
                key_conf.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_conf, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_conf.started')
                # update status
                key_conf.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_conf.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_conf.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_conf.status == STARTED and not waitOnFlip:
                theseKeys = key_conf.getKeys(keyList=['1','2','3','8','9','0'], ignoreKeys=["escape"], waitRelease=False)
                _key_conf_allKeys.extend(theseKeys)
                if len(_key_conf_allKeys):
                    key_conf.keys = _key_conf_allKeys[-1].name  # just the last key pressed
                    key_conf.rt = _key_conf_allKeys[-1].rt
                    key_conf.duration = _key_conf_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=Escala_de_confianza_1,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                Escala_de_confianza_1.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if Escala_de_confianza_1.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in Escala_de_confianza_1.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Escala_de_confianza_1" ---
        for thisComponent in Escala_de_confianza_1.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for Escala_de_confianza_1
        Escala_de_confianza_1.tStop = globalClock.getTime(format='float')
        Escala_de_confianza_1.tStopRefresh = tThisFlipGlobal
        thisExp.addData('Escala_de_confianza_1.stopped', Escala_de_confianza_1.tStop)
        # Run 'End Routine' code from escala_testeo
        # Las etiquetas base son siempre las mismas (el significado del nivel 1 al 6 no cambia)
        confidence_labels = {
            1: 'Seguramente Incorrecto',
            2: 'Probablemente Incorrecto',
            3: 'Tal vez sea Incorrecto',
            4: 'Tal vez sea Correcto',
            5: 'Probablemente Correcto',
            6: 'Seguramente Correcto',
        }
        
        # Obtener la tecla (key_conf.keys suele ser una lista en Python)
        ckey = key_conf.keys
        if isinstance(ckey, list):
            ckey = ckey[-1]  # Tomamos la última tecla por seguridad
        
        # --- CAMBIO CLAVE: Usamos el mapa activo variable, no uno fijo ---
        # active_conf_map ya fue definido en Begin Experiment
        level = active_conf_map.get(ckey, None)
        
        # Obtener etiqueta
        label = confidence_labels.get(level, 'NA')
        
        # Guardar datos
        thisExp.addData('confidence_key', ckey)
        thisExp.addData('confidence_level', level)
        thisExp.addData('confidence_label', label)
        # check responses
        if key_conf.keys in ['', [], None]:  # No response was made
            key_conf.keys = None
        fase_testeo.addData('key_conf.keys',key_conf.keys)
        if key_conf.keys != None:  # we had a response
            fase_testeo.addData('key_conf.rt', key_conf.rt)
            fase_testeo.addData('key_conf.duration', key_conf.duration)
        # the Routine "Escala_de_confianza_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisFase_testeo as finished
        if hasattr(thisFase_testeo, 'status'):
            thisFase_testeo.status = FINISHED
        # if awaiting a pause, pause now
        if fase_testeo.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            fase_testeo.status = STARTED
        thisExp.nextEntry()
        
    # completed 216.0 repeats of 'fase_testeo'
    fase_testeo.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "Despedida" ---
    # create an object to store info about Routine Despedida
    Despedida = data.Routine(
        name='Despedida',
        components=[text_despedida],
    )
    Despedida.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for Despedida
    Despedida.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Despedida.tStart = globalClock.getTime(format='float')
    Despedida.status = STARTED
    thisExp.addData('Despedida.started', Despedida.tStart)
    Despedida.maxDuration = None
    # keep track of which components have finished
    DespedidaComponents = Despedida.components
    for thisComponent in Despedida.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Despedida" ---
    thisExp.currentRoutine = Despedida
    Despedida.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_despedida* updates
        
        # if text_despedida is starting this frame...
        if text_despedida.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_despedida.frameNStart = frameN  # exact frame index
            text_despedida.tStart = t  # local t and not account for scr refresh
            text_despedida.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_despedida, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_despedida.started')
            # update status
            text_despedida.status = STARTED
            text_despedida.setAutoDraw(True)
        
        # if text_despedida is active this frame...
        if text_despedida.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=Despedida,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            Despedida.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if Despedida.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in Despedida.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Despedida" ---
    for thisComponent in Despedida.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Despedida
    Despedida.tStop = globalClock.getTime(format='float')
    Despedida.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Despedida.stopped', Despedida.tStop)
    thisExp.nextEntry()
    # the Routine "Despedida" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
