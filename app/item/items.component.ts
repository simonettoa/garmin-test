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
    items: Item[];

    receivedPacket: string;
    packetToSend: string = "";


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
        
        // let serial = new com.garmin.android.comm.SerialPort();
        // ERROR TypeError: Cannot read property 'android' of undefined


        // let test = new com.garmin.dashcam.VideoProperties("aa", 1, 1, 1);
        // ERROR TypeError: Cannot read property 'dashcam' of undefined

        

        console.log("+++ END - testGarmin!");
    }
}