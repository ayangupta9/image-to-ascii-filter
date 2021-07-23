#IMAGE TO ASCII (WEB)

###Upload any image and convert into ASCII art

- Used Multer to upload images and save the same in '/public/uploads'
- Create image of ASCII art using html2canvas
- Server made with Express and Node

##Screenshots

<img src="./screenshots/ss1.jpeg" alt="Screenshot1" width="400px">
<img src="./screenshots/ss2.jpeg" alt="Screenshot2" width="400px">
<img src="./screenshots/ss3.jpg" alt="Screenshot3" width="400px">


<pre style="
line-height: 4.5px;
letter-spacing: 1.35px
font-size: 4.95px">
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------*------------------------------------------------------------
-----------------------------------------------------------------------------------------------:-..--::-:---------------------------------------------
------------------------------------------------------------------------------------------*:----:--.*.::-::-------------------------------------------
--------------------------------------------------------------------------------------:.--.---.-----**-.--ee*-----------------------------------------
-------------------------------------------------------------------------------------:.e:-*--:*:*:::-:-.--:ee*----------------------------------------
-----------------------------------------------------------------------------------.:.-:----::**--::::--.--::ee---------------------------------------
--------------------------------------------------------------------------------...-::-:----::**-ee:-:.------eee:-------------------------------------
------------------------------------------------------------------------------.-::*:-:-.e-:*e:--:*:--**:-----*:*e*------------------------------------
---------------------------------------------------------------------------..-.:*::.-:*-:**--:.-:-:-. --...-.--::ee:----------------------------------
-----------------------------------------------------------------------------  -:-.-.-*:- .:-:--*- ..:-:.. ..-..-:ee:---------------------------------
-------------------------------------------------------------------------::.:::--.....---.--..-::-. .-▒*:.   .--.-::*---------------------------------
-------------------------------------------------------------------------..---:. ....:*-.. .:-.-:-. .--▒.-    .  .-*:*.-------------------------------
-------------------------------------------------------------------------:--*--......---..-----  -  .---       .--:***::**----------------------------
------------------------------------------------------------------------- :e-.::--.:-.-.::-. . .- .-**-         -*:-:**::**:--------------------------
------------------------------------------------------------------------. .: ---:-..----.. -..-:.--.:*:          ..-e*:*:**::-------------------------
----------------------------------------------------------------------....-.-e*: --.-.-....e:*..  ..-::-          .:-*e*:-*:*:------------------------
----------------------------------------------------------------------..--:. --: ....::::::-.........**-.. .     .--:-▒▒▒:*::e------------------------
----------------------------------------------------------------------.:::..-:-...  .- -:-.......-.-.::::-...     .-**▒#ee--:*:-----------------------
----------------------------------------------------------------------..-. e**:-.   ...-........------::::-...     -.**#e**-**e-----------------------
---------------------------------------------------------------------.:*..:..  ..-   .---...------:--:::*::--..     -*:▒*ee-:**:----------------------
---------------------------------------------------------------------:: -.-  .  ..-- .-....--::--:::-:*:**::--..   .--e:#*@*.*:#----------------------
--------------------------------------------------------------------.:.:-..       .. ---.--::::::***::e****:::--..   -:*@##▒--e*----------------------
------------------------------------------------------------------------..    .  . .-.-.--::::******:*e:****::::-..  --e▒#▒▒...:e---------------------
---------------------------------------------------------------------:-...    .  .  -...-::*************:****:::::-. .::-#*ee. :*---------------------
-------------------------------------------------------------------.---.--. .    .....--::*********e***e*:********:-. -:*eee:- ::---------------------
--------------------------------------------------------------------:..-.--.      --.-::**************ee***********:-.-***e:e:-.e---------------------
---------------------------------------------------------------------.--:---..  ...--:**ee***********e*eee**********:*:**-::::..e---------------------
-------------------------------------------------------------------.- ::*::-- ..-:-::**e*************e**ee**********::::*--:::- ▒---------------------
-------------------------------------------------------------------..-:--:-:-.  ---:**e*****eeeeee***eeeee*:**********:--*.-::. e---------------------
-------------------------------------------------------------------: .:-:----.  :::*ee***eeeee▒▒▒eeeeeeeeee**:*****e**:::*.-.:.-▒---------------------
------------------------------------------------------------------.- :-:*:---. --:********::::*ee▒▒eeeee***e**:****e**e*:e*---..▒---------------------
------------------------------------------------------------------   .-*:.---. -:******:....---::*eeeeee******::**ee***:-e▒--- -*---------------------
-----------------------------------------------------------------..  --*--:--.--:*****::--.--..----:**eee******:**ee**e:-▒▒*--.::---------------------
-----------------------------------------------------------------.-. .:*-:-:-.-:****:::*:-:****--....-:ee**********e***--@@*..-*:---------------------
-----------------------------------------------------------------*.. .:---::-.-::**::::*:..----*e:-..-:eeeeee*********:::#e*- :▒:---------------------
-----------------------------------------------------------------*:   -.:--*-.-::***::**:-:**-.--**-.-**eeeeeee***ee**-*▒▒e:..▒-----------------------
------------------------------------------------------------------:...----.*::::::***:***::eee*-.**:::**eeeeeeee*e▒e*::e#ee--:e:----------------------
-----------------------------------------------------------------:.. ..---.:::::::********::eee:--*:::*********ee▒#▒*.*:e:*:.*e-----------------------
-----------------------------------------------------------------:..:-.----:*:::::*********:ee**:*e:-:e***:-.-:e###▒:-*▒e::e:ee-----------------------
-------------------------------------------------------------------.....---:::::::*****eeee**eee***::*▒e*:. . .-▒##▒-.:e▒*-e-:------------------------
-------------------------------------------------------------------.....:--:::::::***eee▒▒▒▒eeeee*:*:e#e:-:ee:..-*▒▒---*:**e--------------------------
-----------------------------------------------------------------::..:..-.-:::::::***eee▒▒▒▒eeee*:::*e▒e:*..-*e:.:**.:*****:*-------------------------
-----------------------------------------------------------------.---..-..:::::::::**eeee▒eeee**::::*ee***--..-e:--*-:-:-**---------------------------
------------------------------------------------------------------.-- --.-:::*::::::****eeeee▒▒ee*:*******:**:-.*-:-::-::*----------------------------
-------------------------------------------------------------.----::..::-:::*****::::::****:**eee***eee**e**▒e:.--**::e**:----------------------------
-------------------------------------------------------------.****▒:.-::-::******:-::*::::**e*::::**ee▒**e▒▒ee*.:****:-*-:----------------------------
-------------------------------------------------------------.:    ..-:-::::::***::****::***e***:::e▒▒▒**▒▒▒▒e*******--*:-----------------------------
------------------------------------------------------------- -     .::--::::::**:*****:-:::**:ee***▒▒▒e*▒▒▒ee▒▒*::--**:------------------------------
------------------------------------------------------------.       -::-:::-::::*:*****::-::::*:eeeeeeeee▒▒▒▒eee::::*::-------------------------------
-----------------------------------------------------------...      .::---::::::*:***--:::::*:*:.:e▒##ee*e▒▒▒▒e:--.-----------------------------------
----------------------------------------------------------- ..      .::.--:::::::*ee*:..-::****:.-e▒##**:ee▒eee--.------------------------------------
----------------------------------------------------------.....     .-:------::::*ee**---.--****:.-:::::.eeee▒e---------------------------------------
---------------------------------------------------------.....-.     .-----::::::*eee*:.**:-.-**::::*e**-*e*▒#:---------------------------------------
---------------------------------------------------------.....-...    --.--:::::-*e*e*:--▒e▒-..-::::*e*:-***▒▒----------------------------------------
-------------------------------------------------------..  ..---...   ....--::::-*e***::--*#e▒:..--::**:-***▒:----------------------------------------
-------------------------------------------------------     ..---....   ..-------****e*::-..▒#▒*-..-:::-:**ee-----------------------------------------
-------------------------------------------------------.      .----....   .------:*******::--:▒▒▒e-.-:::::*e------------------------------------------
-------------------------------------------------------.       .-----....  .-----:*::*e***:*e:--ee:-e*::**e:------------------------------------------
-------------------------------------------------------.        ..----....  .----::::*ee*****ee*:-:****e*e:-------------------------------------------
----------------------------------------------------::            ..---..    .--.-::::ee**::::*******e▒e▒:--------------------------------------------
----------------------------------------------------:.              .......   .-..---:*ee**::::****ee▒e▒*---------------------------------------------
-----------------------------------------------..........            .......   ....--:*ee**::::***e▒▒ee*----------------------------------------------
---------------------------------------------:-:...........         ..--.-...   -...--*eee*******eee*e:-----------------------------------------------
------------------------------------------:e::--.............      ..-....---     ..--:*ee**eee*****e*------------------------------------------------
----------------------------------------ee**-.......--....---...   .-...  :---.    -.--*eeeeee******--------------------------------------------------
--------------------------------------:::::............-...-----........ .-......  .---:**ee****:**---------------------------------------------------
-------------------------------------*     .........--..-----.----.-...  -... .-:-....--:****:::*:----------------------------------------------------
--------------------------------:---.          ..-----.....----..--..--. -....ee:.: ..-.-::*:::::-----------------------------------------------------
-------------------------------:.             .------........----......-.-...-#*- :.---**.--:::-------------------------------------------------------
------------------------------: ...           .-------.---.   ..----.....-...-e*:.:--. *@-.-...::-----------------------------------------------------
-----------------------------e-:-.              --------....     ...... .-....-ee::--. -@▒▒▒@e..**:---------------------------------------------------
----------------------------e*:---.              .----........     .....--. .. :▒*:-:---##:*▒▓*..*e*--------------------------------------------------
--------------------------::...           .       .-..........    .-:-.--.  ..  .. -:*::▒:.-*@#-. -:*:------------------------------------------------
-------------------------e--:-....        .... .     .........    .------.   ..    .:***:..::e▒@e  .-::-----------------------------------------------
------------------------:--.. ................. .     .........    .----..      .    .----:**e▒:e#: ..-:----------------------------------------------
-----------------------*:......    .--.. .........     ....--..    ..-...        .      .-:*e▒:.-▒▓...  -:--------------------------------------------
--------------------------................ ....-....  ..--:--.. ..  .....   ..            -*ee:..e▓*..:-.---------------------------------------------
--------------------....-..--      ....  .-....--.... .-:::-... ..   ...  ....           ...-::**▒▓e.-***-:-------------------------------------------
------------------.....---.      ..-:**:.  .-..---...  .-----.. ...      ...  ..     ......-:*:::#▓e..-.-***:-----------------------------------------
-----------------.  ..---.      ....--:*e:-. ----:-...  .----.. .-..    ...   .. ...... ....-*▒▒#@@e.. . :-:e-----------------------------------------
----------------.   .----       .... ......--..:::-....  -::-....-....  ..           .... ..--*e▒#@-.. . .--*:----------------------------------------
----------------   ..:-.-   ..------..----..-.---::-..-. .:--....--......             ....  .-:*e#▒ --... .-:e:---------------------------------------
---------------.  ..-:-.-  -----------------..-:-.-:. .-. -----. .-..... ..            .....  -*e#:..--......:e---------------------------------------
---------------.  ..::-.-..-----------------..-*::-:-  ....:-.    .-.................   .......-**:--------..-*▒--------------------------------------
---------------. . -::- -..--------...------..-*-::--.  ..        .--...      ..........  .....--:::-------..-*▒*-------------------------------------
---------------... -:-- ..--------....------..-:-.::-.   .         --...           ....... ....---:::------..-:e▒-------------------------------------
---------------  . ---. ..:-------.....----...-:: -:-.   ..        .--------...      ...........--:**--...-...*▒:*------------------------------------
---------------    ---- ..:--------....----...-:*..--.   ..        .----::::::::-.      .... ..----:*:-...----:▒*-*-----------------------------------
--------------- .  -.--  .:---------....---...--:: -:-.  ..        .-----:::::::*::.      ..  .:---:**--..--. -:eee:----------------------------------
--------------- .  ..--  .:----------..----...--:* .--.   .        .     ...--:::***:-        .::.-::*:--.-.   -***▒----------------------------------
--------------- .  ..--  .:----------------...--:*- -:.   .               ....--::***e*.      -*:..::*-----    -:-*::---------------------------------
--------------- .  ...-. .:----------------....-:::..--.  .               ....--::**eeee-    .-*:..:-*-..-...---::-:----------------------------------
---------------     ..-. .:----------------....--:*-.-:.                  ....--*:***e▒▒▒*.  --*:..:-::.....---:*:.-----------------------------------
---------------     ..-. .:-----::---------....---::..:-            ..---...---:e::*ee▒▒▒▒* .--*-..:--:.. ..----:*▒.----------------------------------
---------------..    ... -:-----:::--:-----....---:::.--.         ..--::::-:::::-::**ee▒▒#▒.---*-..:.-:.. ..-.-:e▒▒▒:---------------------------------
-----------------    ... .::----:::::::----....---::*-.-.         .--::::**::::::::**ee▒▒##----*-..-.-*-.  .-..-e###e---------------------------------
-----------------     .. -:-:----::::::----....----:::.-.         .-----:**:::**:::*eeee▒▒#.---:-..-..:-.  .....:e▒##---------------------------------
-----------------     .. .:------::::::----....------:--.         .-.--.:*e::***::::*eee▒#e.-..:-. -..--.  .--..--e▒#:--------------------------------
----------------.      . .-------:::::-----....-------:..          -..--.-*::*:*:::**ee▒#@::-..:-. -..--.  .------*e▒*--------------------------------
----------------.      . .--------:::------....-----..--.          .-..-.-:--*::*::*ee▒▒#*:::-.-.. ....-.  .-....*:e▒e--------------------------------
----------------.        ------------------....---.....-..           ..  .-.-*-::::*e▒##*-:-:-.-.  ....-.  .-.--..:*e▒--------------------------------
----------------.        ---------------.--.....-.........                . .--:-:**e#@#-.--:..-.. ......  -:.--..*::e:-------------------------------
----------------         ------------------...............                   .-:-:**ee#▒.-.-*- ..  ... ..  :: -:-.*ee*--------------------------------
----------------         ------------------...............                    ----*eee▒: ..--::-:...       **.-e*-**▒:.-------------------------------
----------------    ..   ------------------...............                    .. .-*eee  ..:▒-:---**:---:***▒:-ee**e#*:-------------------------------
---------------.   ....  ------------------...............        .  ...          .-▒#   ..-▒▒:.:--.-----:::ee:*▒e-*eee-------------------------------
---------------.   ..... --.-.-..            .  ... ......       .......           .▒-   ...:e▒:.*e*-*▒e*e*-*ee:*e-*▒e*-------------------------------
---------------.   ..... .                       .........      .....-..    .     ..*.   .. -::*--*::-:▒▒*ee****::-.-.:-------------------------------
---------------.   .....                         ........      ......-..    ........-    .. ....--..---:*****eeeee-:e:*-------------------------------
---------------.   .....               .         ...-...     ........-...  .-:-------   .-  ............----::**eee::**-------------------------------
---------------.  .......            .....      ...---..   .--......--...  .:*:::***-   .-  ...     .........--::*e▒*:e.------------------------------
---------------.  .......           ........  ....----..  ---......--....  -:****ee*-   .--   .       .   .....-::-*▒**-------------------------------
---------------.  .......          .............-----.. .-:--.....---..-...-****e▒e*-   .-.               ......-::.e▒:*------------------------------
---------------.  ........       ...........-----::--. .:::--......-----....*e**▒#▒*. . .-.               .---..--:::e▒*------------------------------
---------------.  .........    ..............-------. .::::--......------. .:e**▒##*.  --:-     . .........-:::**::-.*#e------------------------------
---------------.  ..................................  -::---........-----. .:ee:e##:....-*:.......-------::*eee▒▒▒▒e::##------------------------------
---------------   ...............................    .------........------ .:*e*e#@:.. ..:-.........--..---::***e▒##*-#@------------------------------
---------------   ...........................        ..-----........------ .-:e**▒#...-..-...........----------:*▒##:-e@------------------------------
---------------   ............................       ...----.........----- .-:*e:▒:.. ...--...........--:::::***ee▒▒:.e#▒-----------------------------
--------------..  .............   .............     .....-----.......---:- .--:ee▒ ..   .--.........----::::*ee▒▒▒▒e-.*##-----------------------------
--------------..   ...........    .............     .....------......---:. ----e▒# ..  ..--.................-::****--.*▒#:----------------------------
--------------..    .........    .......  ....      ......-----......-::-..----*▒# .....---...................-:::::--*e▒*----------------------------
--------------...  .........    .........  ...     ..-....--:-.......-::-..-:--*▒*......---...........-.....-:**e▒##▒eeee*----------------------------
--------------.............   ......-....  ...  .....-....--:-.......-::-..::::*#:..-:..---..........---....-*e*e##e**e##e----------------------------
---------------......-.....  ..--...---..   ...---...-.....::-.......-:-..-:*::*#*.  .  -.-.................:e:-:▒▒:--*▒#▒----------------------------
---------------......-.....  ..--.---:-...    .*:-. .-.....::-.......-:-..:****e#*......: ..................:*-.-*e:.-:e#▒----------------------------
----------------....--.-... ..--.--.-*:-..    :*:.........-::--......-:-..:****e#*......- ...    ...........--...-:...-*▒e----------------------------
---------------:....:----.. .------.-**:-.   -:*:...  ....-:::-......-:...:****e#*......--.............................-::----------------------------
-------------..:-..-:-:--.. .--:*:-.-:e*:-   ::::-..   ...-:::-......-:..-*e*::e#:   ...-....       ......--------.......-----------------------------
-------------. ::-.:::*:-.. .-:**:-.-*e*:-  .*:::-..  ...--::::-....-:-..-*e:-:e#.   .-...............--::*e▒▒e*:-.......-----------------------------
-------------. -*--**e**-.  .-:*:---:**:-. .-*:-::...-...----::-....-:-..:ee:-*e▒ ...-:..      .......--:ee▒##e:-.....  ..----------------------------
-------------. .:::ee▒e*-.  .-:*:---:*:-....-:--::----..---..::-....-:-..:*e:-*▒:--..::-     ..........-:*e▒#▒*:-....   .-----------------------------
-------------...:**e▒▒*:-.  ..:*----::-...-.-:-.-::::-..---..*:-...-::...:**--*e.. ..:-- ............---**e▒#e*:-....  .------------------------------
-------------...:ee▒ee*-..  ..-*:---*:...:-.-*-..::::-.----..*:-...-:-. .:::-:*:   .-:...............--::*e▒▒*:----..  .------------------------------
-------------..-:e▒ee*:-..   .-*:--:*-..-:.--*-.-::::-...--..*:-...-:.. .:*--:e    .-...............-----:***--..--.. .-------------------------------
--------------..-*eee*:--..  .-::--::..-:-.--*-.-:::--...--..*:-..-:-.. -::-:*▒   ...--..............-.---**:....-.....-------------------------------
---------------.-:e▒e*::-.....-::--*-.-::..--:----::-...--..-*:-..-:-. .-:-:*▒. ..--....................:-:▒:.  --....--------------------------------
---------------..-*▒▒e::--.....-:-:*-.-*- .----:--:-...---. -*:-.-:-.  .-::*e*      ..................-.:-:▒:-..-....---------------------------------
--------------- ..-e▒e*:--.....-:-::.-::. .---::----...-:-..::----:-. ..-::e▒-     .....................--:e*:-.-...----------------------------------
--------------.  ..:ee*::--....---:-.-*:. .---:----....--. .::---:-.. ..-**▒▒      ......-..............:**eee:.--::----------------------------------
--------------.   .-*ee*:---....--:-.:e:. .-:::----.....-. .::--::-.. ..:*e▒.     ...................---:e:::-... ...---------------------------------
--------------.   ..-*e**:--....--:--*e-. .-**:--......... -:-----.....-e:e▒.       ...........   ....        ..*-...---------------------------------
--------------.    ..-***:--.....-:--**-   -:*-..........  ------... .-:e:ee.                                  .::. .---------------.-----------------

</pre>