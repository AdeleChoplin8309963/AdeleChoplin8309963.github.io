$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1210,700,150,12)
    createPlatform(817,283,120,10)
    createPlatform(836,470,100,16)
    createPlatform(527,168,148,11)
    createPlatform(932,587,126,13)
    createPlatform(1110,386,126,18)
    createPlatform(2876,672,82,12)
    createPlatform(398,294,99,13)
    createPlatform(215,563,115,10)




    // TODO 3 - Create Collectables
    createCollectable("steve", 1000,500)
     createCollectable("max",900,150)
      createCollectable("diamond",600,133)
       createCollectable("grace",300,400)
        createCollectable("kennedi",263,620)
        



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
