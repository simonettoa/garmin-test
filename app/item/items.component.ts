import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

declare var com: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<Item> = [];

    receivedPacket: string;
    packetToSend: string = "";
    activePortIndex: number = -1; 
    PORT_OPEN_TIMEOUT_MS: number = 5000;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();

        this.receivedPacket = "vuoto";
    }


    sendPacketToSerial() {
        console.log("+++ sendPacketToSerial...");

        console.log("+++ sendPacketToSerial - packetToSend " + this.packetToSend);

        this.receivedPacket = "prova";
    }

    cleanReceivedPacketVar() {
        this.receivedPacket = "vuoto";
    }

    cleanPacketToSendVar() {
        this.packetToSend = "";
    }

    testGarmin() {
        console.log("+++ testGarmin...");
        
        // let serial = new com.garmin.android.comm.SerialPort("tty0_raw");
        // console.log("serial -> " + serial);
        // ERROR TypeError: Cannot read property 'android' of undefined

        // get global attribute serial
        // console.log("serial attr. " + serial.SERIAL_PORT_RAW_0);

        
        // let serialAtt = com.garmin.android.comm.SerialPort.BaudRate.BAUD_RATE_9600;
        // console.log("serialAtt " + serialAtt);   // FUNZIONA, restituisce BAUD_RATE_9600
        // com.garmin.android.comm.SerialPort.SERIAL_PORT_RAW_0 --> OK

        let attSerBaudRate = com.garmin.android.comm.SerialPort.BaudRate.BAUD_RATE_57600;
        let attSerPort = 3; // nella mia connessione, ma dipende dalla propria impostazione
        let attSerParity = com.garmin.android.comm.SerialPort.Parity.PARITY_NONE;
        let attSerDataBits = com.garmin.android.comm.SerialPort.DataBits.DATA_BITS_8;

        let portConn = com.garmin.android.comm.SerialPort.SERIAL_PORT_RAW_0;



        // console.log("");

        console.log("+++ END - testGarmin!");
    }

    updStatusSerialPort() {
        console.log("--- updStatusSerialPort start!");

        if(this.setupPortAndStreams()) {
            console.log("*** updStatusSerialPort result function 'setupPortAndStreams'!");


        } else {
            console.log("--- updStatusSerialPort error - setupPortAndStreams ret false!");
        }


        console.log("--- updStatusSerialPort end!");
    }

    setupPortAndStreams(): boolean {
        let ret = false;

        // let portName = com.garmin.android.comm.SerialPort.getAllPortNames();
        // console.log("+++ setupPortAndStreams port name " + portName);

        let res = com.garmin.android.comm.SerialPort.getAllPortNames();
        console.log("res " + res); // [Ljava.lang.String;@ce8d75d

        let serial = com.garmin.android.comm.SerialPort;
        

        // let port = serial.getSerialPort(this, serial.SERIAL_PORT_CDT_0);
        // console.log("+++ setupPortAndStreams - port " + port);

        console.log("abc...");
        // this.serialPortAvailable(serial);

        // let serialAvaliable = com.garmin.android.comm.SerialPort.serialPortAvailable(serial);
        // console.log("+++ setupPortAndStreams - serialAvaliable " + serialAvaliable);

        
        // port.open("Garmin Custom App", this.PORT_OPEN_TIMEOUT_MS, this, serial.OPEN_OPTION_FORCE_FMI_CLOSED);

        // let portN = port.getAllPortNames()[0];

/*        
        let baudRateString = port.getBaudRate().name();

        let dBits = port.getDataBits().name();
        let parity = port.getParity().name();
        let stopB = port.getStopBits().name();
        
*/


/*
        console.log("+++ SerialPort.getAllPortNames");
            
        res.forEach((el) => {
            console.log("porta " + el);
        });    

        for (String portName : SerialPort.getAllPortNames()) {
            SerialPort port;
            port = SerialPort.getSerialPort(this, portName);
            port.addStatusListener(listener);
        }
*/

        console.log("+++ end setupPortAndStreams!");

        ret = true;


        return ret;
    }
    /*
    private synchronized void updateStatus() {
        if (DEBUG) {
            Log.d(TAG, "updateStatus(): called");
        }

        TextView statusView = (TextView) findViewById(R.id.shell_status_text_view);
        if (isShellStarting) {
            statusView.setText(R.string.shell_status_starting);
        } else if (isPortOpen()) {
            String baudRateString;
            try {
                baudRateString = port.getBaudRate().name();
            } catch (IOException e) {
                baudRateString = "BAUD RATE UNKNOWN";
            }
            statusView.setText(this.getString(R.string.shell_status_running) + " "
                    + SerialPort.getAllPortNames()[activePortIndex] + "\n" + baudRateString + "\n"
                    + port.getDataBits().name() + "\n" + port.getParity().name() + "\n"
                    + port.getStopBits().name());
        } else {
            statusView.setText(R.string.shell_status_not_running);
        }
    }
    */

    serialPortAvailable(port: any) {
        console.log("serialPortAvailable start");


        // console.log("Port is now available '" + port.getPortName() + "'");
    }


    resetData() {
        this.activePortIndex = -1;
    }

}

/*
    test con libreria garmin ok

    let videoProp = new com.garmin.dashcam.VideoProperties("abc", 1, 2, 3);
    console.log("videoProp -> " + videoProp);

    let attributeV = videoProp.getFileSize();
    console.log("video attributes " + attributeV);

 */
