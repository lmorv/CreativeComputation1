# CRAB SIMULATOR - Artist Statement

Crab simulator is the ultimate rampaging crab experience. This program seeks to digitally represent the complete obliteration of civilization via giant coconut crab attack; allowing users to step fully into the rampaging crab fantasy through a collection of interlocking interactive program states featuring narrative-immersive human language and The Illusion of Choice [1]. Avenge the ecological crimes inflicted upon marine life and Arthropods in particular by repeatedly turning urbanized centers of human population into mush!

Gamified for human consumption, Crab simulator offers an incentive system composed of two main factors: A dynamically generated city scape that serves as the object of destruction. And the progressive spawning of corrupted quantum bits of information that threaten the simulation from within. As a crab it is up to you to preserve the simulation by consuming the corrupted q-bits, and forge ahead, obliterating one city after another in ever-increasing scale (which grows proportional to your glory).

While the Crab Construct's representational prowess and aesthetic manifestation are limited, there exist hope that through the data gathered from this, and future (more sophisticated) iterations of Crab Simulator the fact of Arthropod dominion will become, simply, inevitable. And so evolution is enhanced by digital technology; to strive for excellence, to journey proudly through uncertainty, to face complexity before non-existence. For this is only the beginning.

---

[1] The Illusion of Choice: A central concept in human society.


# CRAB SIMULATOR - Progress Report

Crab simulator now features a terrain represented as a grid whose square spaces are populated probabilistically by three types of game object, all inheriting from a generic GameObject class:
  Buildings now replace the concepts of Walls and Cities making the grid terrain one complete cityscape with boxes (buildings) of variable height.
  Cars and People are represented by red and pink boxes respectively, sized down to a fraction of a grid unit for symbolic scale.
  An Empty class has been created to account for empty spaces in the grid terrain and are factored into the probabilistic object positioning scheme.
  Schools are yet to be implemented, but are not considered to be a major contributing feature of the Rampaging Crab Experience that is now the core design pillar of Crab    Simulator’s gameplay.

The Crab construct now has the ability to destroy all types of game objects (buildings, cars and people) causing them to disappear on collision detection. Upcoming planned updates to this feature include visual & sound effects for object destruction, as well as a win-state and restart conditions upon destroying all objects. As a technical note; game objects are currently not removed from the grid row arrays containing them, instead they merely stop displaying on screen. Any technique to check object persistence in the simulation will likely require the objects to be removed and the array lengths to be checked against zero.

A corrupted Q-bit now appears every second at a random position within the screen’s boundaries with a random rotation speed on their local position along the X and Y axis. The Crab construct is intended to be imbued with the ability to absorb these q-bits, subtracting them from their array, in a similar way than when destroying game objects. A fail state condition for critical q-bit corruption levels is still a part of the development plan.

Most technical problems so far have arisen from the need to convert 3D coordinates to grid-space coordinates when positioning elements or checking for collisions between them, that on top of tweaking global translate values to center the scene in the XY plane.

The focus of Crab Simulator has shifted to favor the gameplay mechanics in support of the Rampaging Crab Experience pillar. However; a menu flow featuring 2D crab template art or another incorporation of the original concept art, and the substitution of the Crab with a 3D model are still within scope for the final piece as a secondary priority.


# CRAB SIMULATOR - Pitch

Crab simulator is an audio visual experience consisting of a modular crab creation menu flow and a simulation ‘test run’ stage of the user selected crab, with the ability to either succeed at the navigation of a terrain/maze, restart and  create a new crab from scratch, or try to preserve the simulation indefinitely by consuming corrupted q-bits that threaten it’s destruction.

The modular crab creation menu flow consists of the following stages:
Crab Template selection: Select one of three crab templates to start with. Crab templates are laid out vertically in three sections of the canvas (see Figure 1.0).
Crab editing interface: Consists of a single crab template laid out horizontally across the canvas. The head, the carapace and the abdomen, as well as the set of limbs represented by a mystery ‘limb pack’ can be changed by cycling through available options.
Confirm crab selection screen: A message asks the user to confirm their selection and transitions into gameplay.

Simulation stage:
A pre-loaded 3D model of a crab is displayed on screen with a fixed camera 3/4 top-down orthographic perspective view. The crab’s parts correspond to the user’s selection in the crab construction menu. 

Possible user interactions:
Crab can be displaced around the scene using the WASD/ Arrow keys. Avoid fixed obstacles and reach the end of an isometric maze.
Crab can be displaced along a terrain and individual limbs rotated by user input with an overly complicated control scheme.
 Limb movement is mostly inconsequential to the crab construc’s ability to navigate it’s simulated environment. It does, however, modify it in the following ways:
limb movement increases crab acceleration.
Pincer engagement decreases crab acceleration, and turns consumable objects (and small obstacles?)  into mush on contact. Mush can be consumed as normal.
Crab can consume or destroy objects in its wake, placed in the environment at set locations and representing people, human-made things like cars and schools and houses, civilization, and the very fabric of reality.
Quantum black cubes rotating on their axis at large speeds (corrupted q-bits) can be generated and placed at random positions in the scene over time, as a by-product of crab simulation. If the amount of corrupted q-bits rises above a tolerance threshold the simulation ends.
Crab can consume corrupted q-bits to preserve the integrity of the simulation for as long as possible.

Audio and visual effects: 
Objects and q-bits can change positions by slight amounts as the corrupted q-bits reach critical levels.
A transparent overlay of the created crab construct rotating in space can be displayed on command on top of the simulation for user inspection.
Menu interactions are accompanied by ‘glitchy’ sound effects.
Gameplay features SFX for consumable items, crab movement, q-bit corruption and maze completion conditions.
Other 2D transparent overlays (crab template schemas and textural images) may appear on screen at set intervals throughout the simulation.
The mouse cursor is replaced by a crab pincer icon.
