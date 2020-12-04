function isTouching (gameobject , gameobject1) {
    if (gameobject.x - gameobject1.x < gameobject1.width/2 + gameobject.width/2
      && gameobject1.x - gameobject.x < gameobject1.width/2 + gameobject.width/2
      && gameobject.y - gameobject1.y < gameobject1.height/2 + gameobject.height/2
      && gameobject1.y - gameobject.y < gameobject1.height/2 + gameobject.height/2) {
    return true
  }
  else {
    return false
  }
  }



  function bounceOff () {
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }