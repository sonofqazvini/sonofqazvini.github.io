gdjs.IntroCode = {};
gdjs.IntroCode.GD_95954StartTextObjects1= [];
gdjs.IntroCode.GD_95954StartTextObjects2= [];
gdjs.IntroCode.GD_95954StartTextObjects3= [];
gdjs.IntroCode.GDScoreTextObjects1= [];
gdjs.IntroCode.GDScoreTextObjects2= [];
gdjs.IntroCode.GDScoreTextObjects3= [];
gdjs.IntroCode.GDGameTitleObjects1= [];
gdjs.IntroCode.GDGameTitleObjects2= [];
gdjs.IntroCode.GDGameTitleObjects3= [];
gdjs.IntroCode.GDSignObjects1= [];
gdjs.IntroCode.GDSignObjects2= [];
gdjs.IntroCode.GDSignObjects3= [];
gdjs.IntroCode.GDSignArrowObjects1= [];
gdjs.IntroCode.GDSignArrowObjects2= [];
gdjs.IntroCode.GDSignArrowObjects3= [];
gdjs.IntroCode.GDPlatformRightObjects1= [];
gdjs.IntroCode.GDPlatformRightObjects2= [];
gdjs.IntroCode.GDPlatformRightObjects3= [];
gdjs.IntroCode.GDPlatformMiddleObjects1= [];
gdjs.IntroCode.GDPlatformMiddleObjects2= [];
gdjs.IntroCode.GDPlatformMiddleObjects3= [];
gdjs.IntroCode.GDPlatformLeftObjects1= [];
gdjs.IntroCode.GDPlatformLeftObjects2= [];
gdjs.IntroCode.GDPlatformLeftObjects3= [];
gdjs.IntroCode.GDIslandObjects1= [];
gdjs.IntroCode.GDIslandObjects2= [];
gdjs.IntroCode.GDIslandObjects3= [];
gdjs.IntroCode.GDSkeletonObjects1= [];
gdjs.IntroCode.GDSkeletonObjects2= [];
gdjs.IntroCode.GDSkeletonObjects3= [];
gdjs.IntroCode.GDGrass2Objects1= [];
gdjs.IntroCode.GDGrass2Objects2= [];
gdjs.IntroCode.GDGrass2Objects3= [];
gdjs.IntroCode.GDCactus3Objects1= [];
gdjs.IntroCode.GDCactus3Objects2= [];
gdjs.IntroCode.GDCactus3Objects3= [];
gdjs.IntroCode.GDCactus2Objects1= [];
gdjs.IntroCode.GDCactus2Objects2= [];
gdjs.IntroCode.GDCactus2Objects3= [];
gdjs.IntroCode.GDTreeObjects1= [];
gdjs.IntroCode.GDTreeObjects2= [];
gdjs.IntroCode.GDTreeObjects3= [];
gdjs.IntroCode.GDDinoObjects1= [];
gdjs.IntroCode.GDDinoObjects2= [];
gdjs.IntroCode.GDDinoObjects3= [];
gdjs.IntroCode.GDMessageObjects1= [];
gdjs.IntroCode.GDMessageObjects2= [];
gdjs.IntroCode.GDMessageObjects3= [];
gdjs.IntroCode.GDStartText2Objects1= [];
gdjs.IntroCode.GDStartText2Objects2= [];
gdjs.IntroCode.GDStartText2Objects3= [];
gdjs.IntroCode.GD_959555Objects1= [];
gdjs.IntroCode.GD_959555Objects2= [];
gdjs.IntroCode.GD_959555Objects3= [];
gdjs.IntroCode.GDIranObjects1= [];
gdjs.IntroCode.GDIranObjects2= [];
gdjs.IntroCode.GDIranObjects3= [];
gdjs.IntroCode.GDghazvinObjects1= [];
gdjs.IntroCode.GDghazvinObjects2= [];
gdjs.IntroCode.GDghazvinObjects3= [];
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatformObjects3= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDDustParticlesObjects1= [];
gdjs.IntroCode.GDDustParticlesObjects2= [];
gdjs.IntroCode.GDDustParticlesObjects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_4StartText"), gdjs.IntroCode.GD_95954StartTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GD_95954StartTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GD_95954StartTextObjects1[i].getBehavior("Text").setText("Tap on Dino to run");
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDinoObjects2Objects = Hashtable.newFrom({"Dino": gdjs.IntroCode.GDDinoObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects1});
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.IntroCode.GDDinoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDinoObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2a31d085-4bc6-47e8-9dac-79170950b49c", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDinoObjects2Objects = Hashtable.newFrom({"Dino": gdjs.IntroCode.GDDinoObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.IntroCode.GDDustParticlesObjects2});
gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11157300);
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDDinoObjects2 */
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDustParticlesObjects2Objects, (( gdjs.IntroCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.IntroCode.GDDinoObjects2[0].getPointX("DustProjection")), (( gdjs.IntroCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.IntroCode.GDDinoObjects2[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDinoObjects2Objects = Hashtable.newFrom({"Dino": gdjs.IntroCode.GDDinoObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects2Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects1});
gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.IntroCode.GDDinoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDinoObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10948300);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDDinoObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDDinoObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDinoObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}
{ //Subevents
gdjs.IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.IntroCode.GDDinoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDinoObjects2Objects, runtimeScene, false, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10949628);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDDinoObjects2 */
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.IntroCode.GDDustParticlesObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDDinoObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDinoObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10950564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects2[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10951468);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].getBehavior("Effect").enableEffect("Hovering", false);
}
}}

}


};gdjs.IntroCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].setTextAlignment("center");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 30, 1);
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.IntroCode.eventsList2(runtimeScene);
}


{


gdjs.IntroCode.eventsList4(runtimeScene);
}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GD_95954StartTextObjects1.length = 0;
gdjs.IntroCode.GD_95954StartTextObjects2.length = 0;
gdjs.IntroCode.GD_95954StartTextObjects3.length = 0;
gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDGameTitleObjects1.length = 0;
gdjs.IntroCode.GDGameTitleObjects2.length = 0;
gdjs.IntroCode.GDGameTitleObjects3.length = 0;
gdjs.IntroCode.GDSignObjects1.length = 0;
gdjs.IntroCode.GDSignObjects2.length = 0;
gdjs.IntroCode.GDSignObjects3.length = 0;
gdjs.IntroCode.GDSignArrowObjects1.length = 0;
gdjs.IntroCode.GDSignArrowObjects2.length = 0;
gdjs.IntroCode.GDSignArrowObjects3.length = 0;
gdjs.IntroCode.GDPlatformRightObjects1.length = 0;
gdjs.IntroCode.GDPlatformRightObjects2.length = 0;
gdjs.IntroCode.GDPlatformRightObjects3.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects1.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects2.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects3.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects1.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects2.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects3.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDIslandObjects3.length = 0;
gdjs.IntroCode.GDSkeletonObjects1.length = 0;
gdjs.IntroCode.GDSkeletonObjects2.length = 0;
gdjs.IntroCode.GDSkeletonObjects3.length = 0;
gdjs.IntroCode.GDGrass2Objects1.length = 0;
gdjs.IntroCode.GDGrass2Objects2.length = 0;
gdjs.IntroCode.GDGrass2Objects3.length = 0;
gdjs.IntroCode.GDCactus3Objects1.length = 0;
gdjs.IntroCode.GDCactus3Objects2.length = 0;
gdjs.IntroCode.GDCactus3Objects3.length = 0;
gdjs.IntroCode.GDCactus2Objects1.length = 0;
gdjs.IntroCode.GDCactus2Objects2.length = 0;
gdjs.IntroCode.GDCactus2Objects3.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects3.length = 0;
gdjs.IntroCode.GDDinoObjects1.length = 0;
gdjs.IntroCode.GDDinoObjects2.length = 0;
gdjs.IntroCode.GDDinoObjects3.length = 0;
gdjs.IntroCode.GDMessageObjects1.length = 0;
gdjs.IntroCode.GDMessageObjects2.length = 0;
gdjs.IntroCode.GDMessageObjects3.length = 0;
gdjs.IntroCode.GDStartText2Objects1.length = 0;
gdjs.IntroCode.GDStartText2Objects2.length = 0;
gdjs.IntroCode.GDStartText2Objects3.length = 0;
gdjs.IntroCode.GD_959555Objects1.length = 0;
gdjs.IntroCode.GD_959555Objects2.length = 0;
gdjs.IntroCode.GD_959555Objects3.length = 0;
gdjs.IntroCode.GDIranObjects1.length = 0;
gdjs.IntroCode.GDIranObjects2.length = 0;
gdjs.IntroCode.GDIranObjects3.length = 0;
gdjs.IntroCode.GDghazvinObjects1.length = 0;
gdjs.IntroCode.GDghazvinObjects2.length = 0;
gdjs.IntroCode.GDghazvinObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;

gdjs.IntroCode.eventsList5(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
