import RPi.GPIOasGPIO
import pifacedigitalio
import signal
import json

p = pifacedigitalio.PiFaceDigital()

#### Assign pins to the various outputs ####
windmill_0 = 0
windmill_1 = 1
lights_primary = 2
lights_secondary = 3
power_stations = 4
        
def powermode(mode):
        #### Full Power Mode - All Lights on ####
        if mode==0:
                p.leds[windmill_0].turn_on()
                p.leds[windmill_1].turn_on()
                p.leds[lights_primary].turn_on()
                p.leds[lights_secondary].turn_on()
                p.leds[power_stations].turn_off()
        #### Half Power Mode - Windmill at Half Mast - All Lights on with Power Stations ####
        elif mode==1:
                p.leds[windmill_0].turn_on()
                p.leds[windmill_1].turn_off()
                p.leds[lights_primary].turn_on()
                p.leds[lights_secondary].turn_on()
                p.leds[power_stations].turn_on()
        #### Low Power Mode - Windmill at Rest - Power Stations, Secondary Lights and Chargers off ####
        elif mode==2:
                p.leds[windmill_0].turn_on()
                p.leds[windmill_1].turn_off()
                p.leds[lights_primary].turn_on()
                p.leds[lights_secondary].turn_off()
                p.leds[power_stations].turn_off()
        #### Blackout Mode - No Power - All Lights off ####
        elif mode==3:
                p.leds[windmill_0].turn_off()
                p.leds[windmill_1].turn_off()
                p.leds[lights_primary].turn_off()
                p.leds[lights_secondary].turn_off()
                p.leds[power_stations].turn_off()

#### Initialise the Lights to Full Power Mode ####
powermode(0)
mode=0
while true:
        with open("state.txt") as f:
                f.writeline(data)
				mode = int(f.read())
		powermode(mode)
