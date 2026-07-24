gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.idToCallbackMap = new Map();
gdjs.gameCode.GDbodyObjects1= [];
gdjs.gameCode.GDbodyObjects2= [];
gdjs.gameCode.GDbodyObjects3= [];
gdjs.gameCode.GDpianow1Objects1= [];
gdjs.gameCode.GDpianow1Objects2= [];
gdjs.gameCode.GDpianow1Objects3= [];
gdjs.gameCode.GDpianow2Objects1= [];
gdjs.gameCode.GDpianow2Objects2= [];
gdjs.gameCode.GDpianow2Objects3= [];
gdjs.gameCode.GDpianob1Objects1= [];
gdjs.gameCode.GDpianob1Objects2= [];
gdjs.gameCode.GDpianob1Objects3= [];
gdjs.gameCode.GDkeyboardskinObjects1= [];
gdjs.gameCode.GDkeyboardskinObjects2= [];
gdjs.gameCode.GDkeyboardskinObjects3= [];
gdjs.gameCode.GDcountdownObjects1= [];
gdjs.gameCode.GDcountdownObjects2= [];
gdjs.gameCode.GDcountdownObjects3= [];
gdjs.gameCode.GDbuttonObjects1= [];
gdjs.gameCode.GDbuttonObjects2= [];
gdjs.gameCode.GDbuttonObjects3= [];
gdjs.gameCode.GDcontainerObjects1= [];
gdjs.gameCode.GDcontainerObjects2= [];
gdjs.gameCode.GDcontainerObjects3= [];
gdjs.gameCode.GDtransitionObjects1= [];
gdjs.gameCode.GDtransitionObjects2= [];
gdjs.gameCode.GDtransitionObjects3= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtransitionObjects1Objects = Hashtable.newFrom({"transition": gdjs.gameCode.GDtransitionObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDcountdownObjects1Objects = Hashtable.newFrom({"countdown": gdjs.gameCode.GDcountdownObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDkeyboardskinObjects1Objects = Hashtable.newFrom({"keyboardskin": gdjs.gameCode.GDkeyboardskinObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDkeyboardskinObjects1Objects = Hashtable.newFrom({"keyboardskin": gdjs.gameCode.GDkeyboardskinObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDkeyboardskinObjects1Objects = Hashtable.newFrom({"keyboardskin": gdjs.gameCode.GDkeyboardskinObjects1});
gdjs.gameCode.asyncCallback14058860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(14058860, gdjs.gameCode.asyncCallback14058860);
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.4), (runtimeScene) => (gdjs.gameCode.asyncCallback14058860(runtimeScene, asyncObjectsList)), 14058860, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14036500);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDcountdownObjects1, gdjs.gameCode.GDcountdownObjects2);

gdjs.copyArray(runtimeScene.getObjects("keyboardskin"), gdjs.gameCode.GDkeyboardskinObjects2);
{for(var i = 0, len = gdjs.gameCode.GDkeyboardskinObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDkeyboardskinObjects2[i].getBehavior("Tween").addObjectPositionYTween2("start", 512, "easeOutCubic", 3, false);
}
}
{for(var i = 0, len = gdjs.gameCode.GDcountdownObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDcountdownObjects2[i].getBehavior("Tween").addObjectOpacityTween2("cooldownjuice1", 0, "easeInSine", 2.4, true);
}
}

{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.gameCode.GDcountdownObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDcountdownObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcountdownObjects1[i].getBehavior("RepeatTimer").RepeatXTimes("cooldownjuice", 0.8, 3, null) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDcountdownObjects1[k] = gdjs.gameCode.GDcountdownObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcountdownObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDcountdownObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Scale").setScaleX(1.2);
}
}
{for(var i = 0, len = gdjs.gameCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Tween").addObjectScaleXTween2("cooldownjuice", 1, "easeOutQuart", 0.8, false, true);
}
}
}

}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14021228);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "D:/Images/gamejam things/rarg/songs/funky160bpm.ogg", 1, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "beat", 0.750, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("body"), gdjs.gameCode.GDbodyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDbodyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbodyObjects1[i].getBehavior("Scale").setScaleX(1.2);
}
}
{for(var i = 0, len = gdjs.gameCode.GDbodyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbodyObjects1[i].getBehavior("Scale").setScaleY(0.8);
}
}
{for(var i = 0, len = gdjs.gameCode.GDbodyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbodyObjects1[i].getBehavior("Tween").addObjectScaleXTween2("scaleresetx", 1, "easeOutExpo", 0.6, false, false);
}
}
{for(var i = 0, len = gdjs.gameCode.GDbodyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbodyObjects1[i].getBehavior("Tween").addObjectScaleYTween2("scaleresety", 1, "easeOutExpo", 0.6, false, false);
}
}
}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow1Objects1, gdjs.gameCode.GDpianow1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14027244);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14029380);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList5 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow2Objects1, gdjs.gameCode.GDpianow2Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14031508);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList6 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14033660);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList7 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow1Objects1, gdjs.gameCode.GDpianow1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14035780);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList8 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow1Objects1, gdjs.gameCode.GDpianow1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14038132);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList9 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14040252);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList10 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow2Objects1, gdjs.gameCode.GDpianow2Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14042372);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList11 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14044492);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList12 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow2Objects1, gdjs.gameCode.GDpianow2Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14046540);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList13 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14048660);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList14 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow1Objects1, gdjs.gameCode.GDpianow1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14050780);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList15 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Comma");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow1Objects1, gdjs.gameCode.GDpianow1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14052900);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList16 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14055020);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList17 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Period");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow2Objects1, gdjs.gameCode.GDpianow2Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14057140);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList18 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "SemiColon");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianob1Objects1, gdjs.gameCode.GDpianob1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14059116);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianob1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList19 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Slash");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDpianow1Objects1, gdjs.gameCode.GDpianow1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects2[i].setColor("200;200;200");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14062300);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpianow1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.gameCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14001356);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);
gdjs.gameCode.GDtransitionObjects1.length = 0;

{for(var i = 0, len = gdjs.gameCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbuttonObjects1[i].SetLabelTextOp(gdjs.gameCode.GDbuttonObjects1[i].getVariables().getFromIndex(1).getAsString(), null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtransitionObjects1Objects, 0, 64, "");
}
{for(var i = 0, len = gdjs.gameCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.3, "Flash", "Backward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbuttonObjects1[k] = gdjs.gameCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDbuttonObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbuttonObjects1[k] = gdjs.gameCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDbuttonObjects1.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14025348);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("keyboardskin"), gdjs.gameCode.GDkeyboardskinObjects1);
gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);
gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);
gdjs.copyArray(runtimeScene.getObjects("pianow2"), gdjs.gameCode.GDpianow2Objects1);
gdjs.gameCode.GDcountdownObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDcountdownObjects1Objects, 512, 384, "");
}
{for(var i = 0, len = gdjs.gameCode.GDpianow2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow2Objects1[i].getBehavior("Sticker").Stick(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDkeyboardskinObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.gameCode.GDpianow1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianow1Objects1[i].getBehavior("Sticker").Stick(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDkeyboardskinObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.gameCode.GDpianob1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDpianob1Objects1[i].getBehavior("Sticker").Stick(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDkeyboardskinObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.gameCode.GDkeyboardskinObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDkeyboardskinObjects1[i].setY(1024);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.gameCode.GDcountdownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDcountdownObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Animation").getAnimationName() == "ready" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDcountdownObjects1[k] = gdjs.gameCode.GDcountdownObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcountdownObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14035252);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDcountdownObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Animation").setAnimationName("countdown");
}
}
{for(var i = 0, len = gdjs.gameCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Scale").setScaleX(1.2);
}
}
{for(var i = 0, len = gdjs.gameCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Tween").addObjectScaleXTween2("cooldownjuice", 1, "easeOutQuart", 0.8, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.gameCode.GDcountdownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDcountdownObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcountdownObjects1[i].getBehavior("Animation").getAnimationName() == "countdown" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDcountdownObjects1[k] = gdjs.gameCode.GDcountdownObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcountdownObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow1Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow1Objects1[k] = gdjs.gameCode.GDpianow1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow2"), gdjs.gameCode.GDpianow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow2Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow2Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow2Objects1[k] = gdjs.gameCode.GDpianow2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow1Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow1Objects1[k] = gdjs.gameCode.GDpianow1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow1Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow1Objects1[k] = gdjs.gameCode.GDpianow1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow2"), gdjs.gameCode.GDpianow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow2Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow2Objects1[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow2Objects1[k] = gdjs.gameCode.GDpianow2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow2"), gdjs.gameCode.GDpianow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow2Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow2Objects1[i].getVariables().getFromIndex(0)) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow2Objects1[k] = gdjs.gameCode.GDpianow2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 11 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow1Objects1[i].getVariables().getFromIndex(0)) == 12 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow1Objects1[k] = gdjs.gameCode.GDpianow1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow1Objects1[i].getVariables().getFromIndex(0)) == 13 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow1Objects1[k] = gdjs.gameCode.GDpianow1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 14 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow2"), gdjs.gameCode.GDpianow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow2Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow2Objects1[i].getVariables().getFromIndex(0)) == 15 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow2Objects1[k] = gdjs.gameCode.GDpianow2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianob1"), gdjs.gameCode.GDpianob1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianob1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianob1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianob1Objects1[i].getVariables().getFromIndex(0)) == 16 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianob1Objects1[k] = gdjs.gameCode.GDpianob1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianob1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pianow1"), gdjs.gameCode.GDpianow1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpianow1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpianow1Objects1[i].getVariableNumber(gdjs.gameCode.GDpianow1Objects1[i].getVariables().getFromIndex(0)) == 17 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpianow1Objects1[k] = gdjs.gameCode.GDpianow1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpianow1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList19(runtimeScene);} //End of subevents
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDbodyObjects1.length = 0;
gdjs.gameCode.GDbodyObjects2.length = 0;
gdjs.gameCode.GDbodyObjects3.length = 0;
gdjs.gameCode.GDpianow1Objects1.length = 0;
gdjs.gameCode.GDpianow1Objects2.length = 0;
gdjs.gameCode.GDpianow1Objects3.length = 0;
gdjs.gameCode.GDpianow2Objects1.length = 0;
gdjs.gameCode.GDpianow2Objects2.length = 0;
gdjs.gameCode.GDpianow2Objects3.length = 0;
gdjs.gameCode.GDpianob1Objects1.length = 0;
gdjs.gameCode.GDpianob1Objects2.length = 0;
gdjs.gameCode.GDpianob1Objects3.length = 0;
gdjs.gameCode.GDkeyboardskinObjects1.length = 0;
gdjs.gameCode.GDkeyboardskinObjects2.length = 0;
gdjs.gameCode.GDkeyboardskinObjects3.length = 0;
gdjs.gameCode.GDcountdownObjects1.length = 0;
gdjs.gameCode.GDcountdownObjects2.length = 0;
gdjs.gameCode.GDcountdownObjects3.length = 0;
gdjs.gameCode.GDbuttonObjects1.length = 0;
gdjs.gameCode.GDbuttonObjects2.length = 0;
gdjs.gameCode.GDbuttonObjects3.length = 0;
gdjs.gameCode.GDcontainerObjects1.length = 0;
gdjs.gameCode.GDcontainerObjects2.length = 0;
gdjs.gameCode.GDcontainerObjects3.length = 0;
gdjs.gameCode.GDtransitionObjects1.length = 0;
gdjs.gameCode.GDtransitionObjects2.length = 0;
gdjs.gameCode.GDtransitionObjects3.length = 0;

gdjs.gameCode.eventsList20(runtimeScene);
gdjs.gameCode.GDbodyObjects1.length = 0;
gdjs.gameCode.GDbodyObjects2.length = 0;
gdjs.gameCode.GDbodyObjects3.length = 0;
gdjs.gameCode.GDpianow1Objects1.length = 0;
gdjs.gameCode.GDpianow1Objects2.length = 0;
gdjs.gameCode.GDpianow1Objects3.length = 0;
gdjs.gameCode.GDpianow2Objects1.length = 0;
gdjs.gameCode.GDpianow2Objects2.length = 0;
gdjs.gameCode.GDpianow2Objects3.length = 0;
gdjs.gameCode.GDpianob1Objects1.length = 0;
gdjs.gameCode.GDpianob1Objects2.length = 0;
gdjs.gameCode.GDpianob1Objects3.length = 0;
gdjs.gameCode.GDkeyboardskinObjects1.length = 0;
gdjs.gameCode.GDkeyboardskinObjects2.length = 0;
gdjs.gameCode.GDkeyboardskinObjects3.length = 0;
gdjs.gameCode.GDcountdownObjects1.length = 0;
gdjs.gameCode.GDcountdownObjects2.length = 0;
gdjs.gameCode.GDcountdownObjects3.length = 0;
gdjs.gameCode.GDbuttonObjects1.length = 0;
gdjs.gameCode.GDbuttonObjects2.length = 0;
gdjs.gameCode.GDbuttonObjects3.length = 0;
gdjs.gameCode.GDcontainerObjects1.length = 0;
gdjs.gameCode.GDcontainerObjects2.length = 0;
gdjs.gameCode.GDcontainerObjects3.length = 0;
gdjs.gameCode.GDtransitionObjects1.length = 0;
gdjs.gameCode.GDtransitionObjects2.length = 0;
gdjs.gameCode.GDtransitionObjects3.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
