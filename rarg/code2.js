gdjs.lvleditCode = {};
gdjs.lvleditCode.localVariables = [];
gdjs.lvleditCode.idToCallbackMap = new Map();
gdjs.lvleditCode.GDtextObjects1= [];
gdjs.lvleditCode.GDtextObjects2= [];
gdjs.lvleditCode.GDtextObjects3= [];
gdjs.lvleditCode.GDtoggleswitchObjects1= [];
gdjs.lvleditCode.GDtoggleswitchObjects2= [];
gdjs.lvleditCode.GDtoggleswitchObjects3= [];
gdjs.lvleditCode.GDbpmsettingsObjects1= [];
gdjs.lvleditCode.GDbpmsettingsObjects2= [];
gdjs.lvleditCode.GDbpmsettingsObjects3= [];
gdjs.lvleditCode.GDbpmarrowrObjects1= [];
gdjs.lvleditCode.GDbpmarrowrObjects2= [];
gdjs.lvleditCode.GDbpmarrowrObjects3= [];
gdjs.lvleditCode.GDbpmarrowlObjects1= [];
gdjs.lvleditCode.GDbpmarrowlObjects2= [];
gdjs.lvleditCode.GDbpmarrowlObjects3= [];
gdjs.lvleditCode.GDinfotextObjects1= [];
gdjs.lvleditCode.GDinfotextObjects2= [];
gdjs.lvleditCode.GDinfotextObjects3= [];
gdjs.lvleditCode.GDsongnameinputObjects1= [];
gdjs.lvleditCode.GDsongnameinputObjects2= [];
gdjs.lvleditCode.GDsongnameinputObjects3= [];
gdjs.lvleditCode.GDbuttonObjects1= [];
gdjs.lvleditCode.GDbuttonObjects2= [];
gdjs.lvleditCode.GDbuttonObjects3= [];
gdjs.lvleditCode.GDcontainerObjects1= [];
gdjs.lvleditCode.GDcontainerObjects2= [];
gdjs.lvleditCode.GDcontainerObjects3= [];
gdjs.lvleditCode.GDtransitionObjects1= [];
gdjs.lvleditCode.GDtransitionObjects2= [];
gdjs.lvleditCode.GDtransitionObjects3= [];


gdjs.lvleditCode.mapOfGDgdjs_9546lvleditCode_9546GDtransitionObjects1Objects = Hashtable.newFrom({"transition": gdjs.lvleditCode.GDtransitionObjects1});
gdjs.lvleditCode.asyncCallback13967852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvleditCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
gdjs.lvleditCode.localVariables.length = 0;
}
gdjs.lvleditCode.idToCallbackMap.set(13967852, gdjs.lvleditCode.asyncCallback13967852);
gdjs.lvleditCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvleditCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.lvleditCode.asyncCallback13967852(runtimeScene, asyncObjectsList)), 13967852, asyncObjectsList);
}
}

}


};gdjs.lvleditCode.asyncCallback13969228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvleditCode.localVariables);
gdjs.lvleditCode.localVariables.length = 0;
}
gdjs.lvleditCode.idToCallbackMap.set(13969228, gdjs.lvleditCode.asyncCallback13969228);
gdjs.lvleditCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvleditCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.saveVariableToJSONFileAsyncTask(runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "level.json", gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.lvleditCode.asyncCallback13969228(runtimeScene, asyncObjectsList)), 13969228, asyncObjectsList);
}
}

}


};gdjs.lvleditCode.asyncCallback13970156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvleditCode.localVariables);
gdjs.lvleditCode.localVariables.length = 0;
}
gdjs.lvleditCode.idToCallbackMap.set(13970156, gdjs.lvleditCode.asyncCallback13970156);
gdjs.lvleditCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvleditCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.loadVariableFromJSONFileAsyncTask(runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "level.json", gdjs.VariablesContainer.badVariable, true), (runtimeScene) => (gdjs.lvleditCode.asyncCallback13970156(runtimeScene, asyncObjectsList)), 13970156, asyncObjectsList);
}
}

}


};gdjs.lvleditCode.eventsList3 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.lvleditCode.GDtoggleswitchObjects1, gdjs.lvleditCode.GDtoggleswitchObjects2);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDtoggleswitchObjects2.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDtoggleswitchObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDtoggleswitchObjects2[k] = gdjs.lvleditCode.GDtoggleswitchObjects2[i];
        ++k;
    }
}
gdjs.lvleditCode.GDtoggleswitchObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("legit").setBoolean(true);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("legit").setBoolean(false);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.lvleditCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("toggleswitch"), gdjs.lvleditCode.GDtoggleswitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDtoggleswitchObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDtoggleswitchObjects1[i].getVariableNumber(gdjs.lvleditCode.GDtoggleswitchObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDtoggleswitchObjects1[k] = gdjs.lvleditCode.GDtoggleswitchObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDtoggleswitchObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvleditCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.lvleditCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.lvleditCode.GDbuttonObjects1, gdjs.lvleditCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects2[i].getVariableNumber(gdjs.lvleditCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects2[k] = gdjs.lvleditCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvleditCode.GDbuttonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.lvleditCode.GDtransitionObjects2);
{for(var i = 0, len = gdjs.lvleditCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.lvleditCode.GDbuttonObjects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.lvleditCode.GDtransitionObjects2.length ;i < len;++i) {
    gdjs.lvleditCode.GDtransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.3, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.lvleditCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.lvleditCode.GDbuttonObjects1, gdjs.lvleditCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects2[i].getVariableNumber(gdjs.lvleditCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects2[k] = gdjs.lvleditCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvleditCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.lvleditCode.GDbuttonObjects1, gdjs.lvleditCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects2[i].getVariableNumber(gdjs.lvleditCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects2[k] = gdjs.lvleditCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvleditCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.lvleditCode.GDbuttonObjects1, gdjs.lvleditCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects2[i].getVariableNumber(gdjs.lvleditCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects2[k] = gdjs.lvleditCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(gdjs.lvleditCode.GDbuttonObjects1, gdjs.lvleditCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects2[i].getVariableNumber(gdjs.lvleditCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects2[k] = gdjs.lvleditCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bpmsettings"), gdjs.lvleditCode.GDbpmsettingsObjects2);
{for(var i = 0, len = gdjs.lvleditCode.GDbpmsettingsObjects2.length ;i < len;++i) {
    gdjs.lvleditCode.GDbpmsettingsObjects2[i].returnVariable(gdjs.lvleditCode.GDbpmsettingsObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("bpm").getAsNumber());
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1536, "", 0);
}
}

}


{

/* Reuse gdjs.lvleditCode.GDbuttonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects1[i].getVariableNumber(gdjs.lvleditCode.GDbuttonObjects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects1[k] = gdjs.lvleditCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bpmsettings"), gdjs.lvleditCode.GDbpmsettingsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("bpm").setNumber(((gdjs.lvleditCode.GDbpmsettingsObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.lvleditCode.GDbpmsettingsObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 512, "", 0);
}

{ //Subevents
gdjs.lvleditCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvleditCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14001356);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.lvleditCode.GDbuttonObjects1);
gdjs.lvleditCode.GDtransitionObjects1.length = 0;

{for(var i = 0, len = gdjs.lvleditCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDbuttonObjects1[i].SetLabelTextOp(gdjs.lvleditCode.GDbuttonObjects1[i].getVariables().getFromIndex(1).getAsString(), null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.lvleditCode.mapOfGDgdjs_9546lvleditCode_9546GDtransitionObjects1Objects, 0, 64, "");
}
{for(var i = 0, len = gdjs.lvleditCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.3, "Flash", "Backward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.lvleditCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects1[k] = gdjs.lvleditCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.lvleditCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects1[k] = gdjs.lvleditCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects1.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13964740);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.lvleditCode.GDtextObjects1);
{for(var i = 0, len = gdjs.lvleditCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDtextObjects1[i].getBehavior("Text").setText(gdjs.lvleditCode.GDtextObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bpmsettings"), gdjs.lvleditCode.GDbpmsettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("infotext"), gdjs.lvleditCode.GDinfotextObjects1);
{for(var i = 0, len = gdjs.lvleditCode.GDbpmsettingsObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDbpmsettingsObjects1[i].getBehavior("Text").setText(gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.lvleditCode.GDinfotextObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDinfotextObjects1[i].getBehavior("Text").setText("'" + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("metadata").getChild("songname").getAsString() + "'" + "\n\nBPM: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("bpm").getAsString() + "\nLegitness: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("legit").getAsString() + "\n\n\n\n\n\n\n\n\n\nRARG version " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("version").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.lvleditCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbuttonObjects1[k] = gdjs.lvleditCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13965428);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvleditCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bpmarrowr"), gdjs.lvleditCode.GDbpmarrowrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbpmarrowrObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbpmarrowrObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbpmarrowrObjects1[k] = gdjs.lvleditCode.GDbpmarrowrObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbpmarrowrObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13975396);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button1.ogg", 1, false, 75, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bpmarrowr"), gdjs.lvleditCode.GDbpmarrowrObjects1);
gdjs.copyArray(runtimeScene.getObjects("bpmsettings"), gdjs.lvleditCode.GDbpmsettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbpmarrowrObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbpmarrowrObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbpmarrowrObjects1[k] = gdjs.lvleditCode.GDbpmarrowrObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbpmarrowrObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbpmsettingsObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariableNumber(gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariables().getFromIndex(0)) < 500 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbpmsettingsObjects1[k] = gdjs.lvleditCode.GDbpmsettingsObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbpmsettingsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13976228);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.lvleditCode.GDbpmsettingsObjects1 */
{for(var i = 0, len = gdjs.lvleditCode.GDbpmsettingsObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDbpmsettingsObjects1[i].returnVariable(gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button2.ogg", 1, false, 75, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bpmarrowl"), gdjs.lvleditCode.GDbpmarrowlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbpmarrowlObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbpmarrowlObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbpmarrowlObjects1[k] = gdjs.lvleditCode.GDbpmarrowlObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbpmarrowlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13977796);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button1.ogg", 1, false, 75, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bpmarrowl"), gdjs.lvleditCode.GDbpmarrowlObjects1);
gdjs.copyArray(runtimeScene.getObjects("bpmsettings"), gdjs.lvleditCode.GDbpmsettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbpmarrowlObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbpmarrowlObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbpmarrowlObjects1[k] = gdjs.lvleditCode.GDbpmarrowlObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbpmarrowlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDbpmsettingsObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariableNumber(gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariables().getFromIndex(0)) > 60 ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDbpmsettingsObjects1[k] = gdjs.lvleditCode.GDbpmsettingsObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDbpmsettingsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13979284);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.lvleditCode.GDbpmsettingsObjects1 */
{for(var i = 0, len = gdjs.lvleditCode.GDbpmsettingsObjects1.length ;i < len;++i) {
    gdjs.lvleditCode.GDbpmsettingsObjects1[i].returnVariable(gdjs.lvleditCode.GDbpmsettingsObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button2.ogg", 1, false, 75, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("toggleswitch"), gdjs.lvleditCode.GDtoggleswitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDtoggleswitchObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDtoggleswitchObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDtoggleswitchObjects1[k] = gdjs.lvleditCode.GDtoggleswitchObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDtoggleswitchObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13980548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button1.ogg", 1, false, 75, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("toggleswitch"), gdjs.lvleditCode.GDtoggleswitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvleditCode.GDtoggleswitchObjects1.length;i<l;++i) {
    if ( gdjs.lvleditCode.GDtoggleswitchObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lvleditCode.GDtoggleswitchObjects1[k] = gdjs.lvleditCode.GDtoggleswitchObjects1[i];
        ++k;
    }
}
gdjs.lvleditCode.GDtoggleswitchObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13981588);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/sfx/button2.ogg", 1, false, 75, 1);
}
}

}


};

gdjs.lvleditCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvleditCode.GDtextObjects1.length = 0;
gdjs.lvleditCode.GDtextObjects2.length = 0;
gdjs.lvleditCode.GDtextObjects3.length = 0;
gdjs.lvleditCode.GDtoggleswitchObjects1.length = 0;
gdjs.lvleditCode.GDtoggleswitchObjects2.length = 0;
gdjs.lvleditCode.GDtoggleswitchObjects3.length = 0;
gdjs.lvleditCode.GDbpmsettingsObjects1.length = 0;
gdjs.lvleditCode.GDbpmsettingsObjects2.length = 0;
gdjs.lvleditCode.GDbpmsettingsObjects3.length = 0;
gdjs.lvleditCode.GDbpmarrowrObjects1.length = 0;
gdjs.lvleditCode.GDbpmarrowrObjects2.length = 0;
gdjs.lvleditCode.GDbpmarrowrObjects3.length = 0;
gdjs.lvleditCode.GDbpmarrowlObjects1.length = 0;
gdjs.lvleditCode.GDbpmarrowlObjects2.length = 0;
gdjs.lvleditCode.GDbpmarrowlObjects3.length = 0;
gdjs.lvleditCode.GDinfotextObjects1.length = 0;
gdjs.lvleditCode.GDinfotextObjects2.length = 0;
gdjs.lvleditCode.GDinfotextObjects3.length = 0;
gdjs.lvleditCode.GDsongnameinputObjects1.length = 0;
gdjs.lvleditCode.GDsongnameinputObjects2.length = 0;
gdjs.lvleditCode.GDsongnameinputObjects3.length = 0;
gdjs.lvleditCode.GDbuttonObjects1.length = 0;
gdjs.lvleditCode.GDbuttonObjects2.length = 0;
gdjs.lvleditCode.GDbuttonObjects3.length = 0;
gdjs.lvleditCode.GDcontainerObjects1.length = 0;
gdjs.lvleditCode.GDcontainerObjects2.length = 0;
gdjs.lvleditCode.GDcontainerObjects3.length = 0;
gdjs.lvleditCode.GDtransitionObjects1.length = 0;
gdjs.lvleditCode.GDtransitionObjects2.length = 0;
gdjs.lvleditCode.GDtransitionObjects3.length = 0;

gdjs.lvleditCode.eventsList6(runtimeScene);
gdjs.lvleditCode.GDtextObjects1.length = 0;
gdjs.lvleditCode.GDtextObjects2.length = 0;
gdjs.lvleditCode.GDtextObjects3.length = 0;
gdjs.lvleditCode.GDtoggleswitchObjects1.length = 0;
gdjs.lvleditCode.GDtoggleswitchObjects2.length = 0;
gdjs.lvleditCode.GDtoggleswitchObjects3.length = 0;
gdjs.lvleditCode.GDbpmsettingsObjects1.length = 0;
gdjs.lvleditCode.GDbpmsettingsObjects2.length = 0;
gdjs.lvleditCode.GDbpmsettingsObjects3.length = 0;
gdjs.lvleditCode.GDbpmarrowrObjects1.length = 0;
gdjs.lvleditCode.GDbpmarrowrObjects2.length = 0;
gdjs.lvleditCode.GDbpmarrowrObjects3.length = 0;
gdjs.lvleditCode.GDbpmarrowlObjects1.length = 0;
gdjs.lvleditCode.GDbpmarrowlObjects2.length = 0;
gdjs.lvleditCode.GDbpmarrowlObjects3.length = 0;
gdjs.lvleditCode.GDinfotextObjects1.length = 0;
gdjs.lvleditCode.GDinfotextObjects2.length = 0;
gdjs.lvleditCode.GDinfotextObjects3.length = 0;
gdjs.lvleditCode.GDsongnameinputObjects1.length = 0;
gdjs.lvleditCode.GDsongnameinputObjects2.length = 0;
gdjs.lvleditCode.GDsongnameinputObjects3.length = 0;
gdjs.lvleditCode.GDbuttonObjects1.length = 0;
gdjs.lvleditCode.GDbuttonObjects2.length = 0;
gdjs.lvleditCode.GDbuttonObjects3.length = 0;
gdjs.lvleditCode.GDcontainerObjects1.length = 0;
gdjs.lvleditCode.GDcontainerObjects2.length = 0;
gdjs.lvleditCode.GDcontainerObjects3.length = 0;
gdjs.lvleditCode.GDtransitionObjects1.length = 0;
gdjs.lvleditCode.GDtransitionObjects2.length = 0;
gdjs.lvleditCode.GDtransitionObjects3.length = 0;


return;

}

gdjs['lvleditCode'] = gdjs.lvleditCode;
