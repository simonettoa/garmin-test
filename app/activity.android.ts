import { setActivityCallbacks, AndroidActivityCallbacks } from "tns-core-modules/ui/frame";


declare var com: any;


@JavaProxy("com.tns.MainActivity")
class Activity extends android.app.Activity {
    private _callbacks: AndroidActivityCallbacks;

    onCreate(savedInstanceState: android.os.Bundle): void {
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);

        console.log("*** onCreate - activity");
    }

    onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    onStart(): void {
        this._callbacks.onStart(this, super.onStart);

        console.log("*** onStart - activity");
    }

    onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions,
            grantResults, undefined /*TODO: Enable if needed*/);
    }

    onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }
}
