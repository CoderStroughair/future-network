import os
import RPi.GPIO as GPIO
import pifacedigitalio
import signal
import json
from time import sleep

p = pifacedigitalio.PiFaceDigital()

#### Assign pins to the various outputs ####
windmill = 0
lightsPrimary = 1
chargers = 2
mode = 0
delay = 5

def mode_change(signum,frame):
        global mode 
	global delay
	mode = mode+1
        #### Currently no Requirement for Blackout Mode ####
        if mode > 2:
                mode = 0
        powermode(mode)
        signal.alarm(delay)
        
def powermode(mode):
        #### Full Power Mode - All Lights on ####
        if mode==0:
                p.leds[windmill].turn_on()
                p.leds[lightsPrimary].turn_on()
		p.leds[chargers].turn_on()
        #### Power Station Mode - Windmill at Rest - All Lights on with Power Stations ####
        elif mode==1:
                p.leds[windmill].turn_off()
                p.leds[lightsPrimary].turn_on()
		p.leds[chargers].turn_on()
        #### Low Demand Mode - Windmill at Rest - Power Stations, Secondary Lights and Chargers off ####
        elif mode==2:
                p.leds[windmill].turn_off()
                p.leds[lightsPrimary].turn_off()
		p.leds[chargers].turn_off()

os.chdir("/var/www") 				#### Change directory to save files in proper folder ####
powermode(0)					#### Initialise the Lights to Full Power Mode ####
signal.signal(signal.SIGALRM,mode_change)	#### Initialise call to change mode for every <delay> seconds ####
signal.alarm(delay)
while True:
	data2 = json.dumps(mode)		#### May need to be changed into HTML type code ####
	with open("state2.html","w") as f:
		f.write('<link href="style.css" rel="stylesheet" type="text/css" />')
		f.write(data2)
	sleep(1)
