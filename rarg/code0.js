gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDrandomtextObjects1= [];
gdjs.menuCode.GDrandomtextObjects2= [];
gdjs.menuCode.GDrandomtextObjects3= [];
gdjs.menuCode.GDlogotextObjects1= [];
gdjs.menuCode.GDlogotextObjects2= [];
gdjs.menuCode.GDlogotextObjects3= [];
gdjs.menuCode.GDversionObjects1= [];
gdjs.menuCode.GDversionObjects2= [];
gdjs.menuCode.GDversionObjects3= [];
gdjs.menuCode.GDbuttonObjects1= [];
gdjs.menuCode.GDbuttonObjects2= [];
gdjs.menuCode.GDbuttonObjects3= [];
gdjs.menuCode.GDcontainerObjects1= [];
gdjs.menuCode.GDcontainerObjects2= [];
gdjs.menuCode.GDcontainerObjects3= [];
gdjs.menuCode.GDtransitionObjects1= [];
gdjs.menuCode.GDtransitionObjects2= [];
gdjs.menuCode.GDtransitionObjects3= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtransitionObjects1Objects = Hashtable.newFrom({"transition": gdjs.menuCode.GDtransitionObjects1});
gdjs.menuCode.asyncCallback13893012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
gdjs.menuCode.localVariables.length = 0;
}
gdjs.menuCode.idToCallbackMap.set(13893012, gdjs.menuCode.asyncCallback13893012);
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.menuCode.asyncCallback13893012(runtimeScene, asyncObjectsList)), 13893012, asyncObjectsList);
}
}

}


};gdjs.menuCode.asyncCallback13894972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvledit", false);
}
gdjs.menuCode.localVariables.length = 0;
}
gdjs.menuCode.idToCallbackMap.set(13894972, gdjs.menuCode.asyncCallback13894972);
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.menuCode.asyncCallback13894972(runtimeScene, asyncObjectsList)), 13894972, asyncObjectsList);
}
}

}


};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.menuCode.GDbuttonObjects1, gdjs.menuCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDbuttonObjects2[i].getVariableNumber(gdjs.menuCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbuttonObjects2[k] = gdjs.menuCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDbuttonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.menuCode.GDtransitionObjects2);
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.menuCode.GDtransitionObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDtransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.3, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.menuCode.GDbuttonObjects1, gdjs.menuCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDbuttonObjects2[i].getVariableNumber(gdjs.menuCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbuttonObjects2[k] = gdjs.menuCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {
}

}


{

/* Reuse gdjs.menuCode.GDbuttonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbuttonObjects1[i].getVariableNumber(gdjs.menuCode.GDbuttonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbuttonObjects1[k] = gdjs.menuCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.menuCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.menuCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.3, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14001356);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);
gdjs.menuCode.GDtransitionObjects1.length = 0;

{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].SetLabelTextOp(gdjs.menuCode.GDbuttonObjects1[i].getVariables().getFromIndex(1).getAsString(), null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtransitionObjects1Objects, 0, 64, "");
}
{for(var i = 0, len = gdjs.menuCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.3, "Flash", "Backward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbuttonObjects1[k] = gdjs.menuCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14021860);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button1.ogg", 1, false, 75, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbuttonObjects1[k] = gdjs.menuCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14024020);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button2.ogg", 1, false, 75, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13890596);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("randomtext"), gdjs.menuCode.GDrandomtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("version"), gdjs.menuCode.GDversionObjects1);
{for(var i = 0, len = gdjs.menuCode.GDrandomtextObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDrandomtextObjects1[i].getBehavior("Text").setText(gdjs.menuCode.GDrandomtextObjects1[i].getVariables().getFromIndex(0).getChild(gdjs.randomInRange(0, 6)).getAsString());
}
}
{for(var i = 0, len = gdjs.menuCode.GDversionObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDversionObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("versionname").getAsString() + "\nv" + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("version").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbuttonObjects1[k] = gdjs.menuCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13892020);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDrandomtextObjects1.length = 0;
gdjs.menuCode.GDrandomtextObjects2.length = 0;
gdjs.menuCode.GDrandomtextObjects3.length = 0;
gdjs.menuCode.GDlogotextObjects1.length = 0;
gdjs.menuCode.GDlogotextObjects2.length = 0;
gdjs.menuCode.GDlogotextObjects3.length = 0;
gdjs.menuCode.GDversionObjects1.length = 0;
gdjs.menuCode.GDversionObjects2.length = 0;
gdjs.menuCode.GDversionObjects3.length = 0;
gdjs.menuCode.GDbuttonObjects1.length = 0;
gdjs.menuCode.GDbuttonObjects2.length = 0;
gdjs.menuCode.GDbuttonObjects3.length = 0;
gdjs.menuCode.GDcontainerObjects1.length = 0;
gdjs.menuCode.GDcontainerObjects2.length = 0;
gdjs.menuCode.GDcontainerObjects3.length = 0;
gdjs.menuCode.GDtransitionObjects1.length = 0;
gdjs.menuCode.GDtransitionObjects2.length = 0;
gdjs.menuCode.GDtransitionObjects3.length = 0;

gdjs.menuCode.eventsList3(runtimeScene);
gdjs.menuCode.GDrandomtextObjects1.length = 0;
gdjs.menuCode.GDrandomtextObjects2.length = 0;
gdjs.menuCode.GDrandomtextObjects3.length = 0;
gdjs.menuCode.GDlogotextObjects1.length = 0;
gdjs.menuCode.GDlogotextObjects2.length = 0;
gdjs.menuCode.GDlogotextObjects3.length = 0;
gdjs.menuCode.GDversionObjects1.length = 0;
gdjs.menuCode.GDversionObjects2.length = 0;
gdjs.menuCode.GDversionObjects3.length = 0;
gdjs.menuCode.GDbuttonObjects1.length = 0;
gdjs.menuCode.GDbuttonObjects2.length = 0;
gdjs.menuCode.GDbuttonObjects3.length = 0;
gdjs.menuCode.GDcontainerObjects1.length = 0;
gdjs.menuCode.GDcontainerObjects2.length = 0;
gdjs.menuCode.GDcontainerObjects3.length = 0;
gdjs.menuCode.GDtransitionObjects1.length = 0;
gdjs.menuCode.GDtransitionObjects2.length = 0;
gdjs.menuCode.GDtransitionObjects3.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
