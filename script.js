var row1 = ["O","O","O","O","O","O","C","O"];
var row2 = ["O","O","O","O","O","O","C","W"];
var row3 = ["C","O","C","O","O","C","O","O"];
var row4 = ["O","C","W","O","O","O","O","O"];
var row5 = ["O","O","O","O","C","O","O","O"];
var row6 = ["O","O","O","O","O","C","O","O"];
var row7 = ["O","W","C","O","O","O","O","O"];
var row8 = ["P","O","O","O","O","O","O","C"];
var board = [row1,row2,row3,row4,row5,row6,row7,row8];

while(startpos != "O" || endpos != "O" || startpos != endpos){
	var row = Math.floor(Math.random()*board.length);
	var col = Math.floor(Math.random()*board.length);
	var row2 = Math.floor(Math.random()*board.length);
	var col2 = Math.floor(Math.random()*board.length);
	
	var startpos = board[row][col];
	var endpos = board[row2][col2];
	
	if(startpos == "O" && endpos == "O"){
		board[row][col] = "S";
		board[row2][col2] = "G";
		break;
	}
	else{};
}

function showTable() {
    var myTableDiv = document.getElementById("board")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.border = '1'
    table.appendChild(tableBody);
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
			if (board[i][j] == "W"||board[i][j] == "O"||board[i][j] == "P"||board[i][j] == "G")
        		board[i][j] = "-"
        }
    }

    for (i = 0; i < board.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < board[i].length; j++) {
            var td = document.createElement('TD')
            
            td.appendChild(document.createTextNode(board[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }  
    myTableDiv.appendChild(table)
}	

var playerRow = row;
var playerCol = col;

var prizeCounter = 0;

var victory = 0;
var exit = 0;

var player = {attack:6, hp:200, name:"Generic Female Heroine"};
var battle = 0;

board[0][6] = {name:"Suicide Prevention Spokesperson", hp:12, attack:5, prize:"Rope", challenge: 
	function(){
		while(battle == 1){
			player.hp -= board[0][6].attack;
			board[0][6].hp -= player.attack;
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[0][6].hp <= 0){
				document.getElementById("battle").innerHTML ="You defeated " +board[0][6].name+"!. You got: " +board[0][6].prize+"!<br/>" ;
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};
board[1][6] = {name:"Your Best Friend", hp:12, attack:5, prize: "Stool", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[1][6].attack;
			board[1][6].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[1][6].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[1][6].name+"!. You got: " +board[1][6].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[2][0] = {name:"Your Dog", hp:12, attack:5, prize:"Chewed Up Stool", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[2][0].attack;
			board[2][0].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[2][0].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[2][0].name+"!. You got: " +board[2][0].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[2][2] = {name:"Steve Jobs", hp:12, attack:5, prize: "High Tech Rope", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[2][2].attack;
			board[2][2].hp -= player.attack;

			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[2][2].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[2][2].name+"!. You got: " +board[2][2].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[2][5] = {name:"Your Conscience", hp:24, attack:5, prize: "Nothing", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[2][5].attack;
			board[2][5].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[1][6].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[2][5].name+"!. You got: " +board[2][5].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[3][1] = {name:"Guy From Nextdoor", hp:12, attack:5, prize: "Nice Rope", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[3][1].attack;
			board[3][1].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[3][1].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[3][1].name+"!. You got: " +board[3][1].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[4][4] = {name:"Your Local Priest", hp:12, attack:5, prize: "Holy Chair", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[4][4].attack;
			board[4][4].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[4][4].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[4][4].name+"!. You got: " +board[4][4].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[5][5] = {name:"D3", hp: 12, attack:5, prize: "Bloody Rope", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[5][5].attack;
			board[5][5].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[5][5].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[5][5].name+"!. You got: " +board[5][5].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[6][2] = {name:"Guy That Plays League of Legends", hp:12, attack:5, prize: "Expensive Gaming Chair", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[6][2].attack;
			board[6][2].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[6][2].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[6][2].name+"!. You got: " +board[6][2].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
board[7][7] = {name:"Guardian Angel", hp:30, attack:5, prize:"Angelic Rope", challenge:
	function(){
		while(battle == 1){
			player.hp -= board[7][7].attack;
			board[7][7].hp -= player.attack;
			
			if(player.hp <= 0){
				document.getElementById("battle").innerHTML ="You Have Died!!!!! GAME OVER";
			}
			else if (board[7][7].hp <= 0){
				document.getElementById("battle").innerHTML="You defeated " +board[7][7].name+"!. You got: " +board[7][7].prize+"!<br/>";
				prizeCounter++;
				battle = 0;
			}
			else{}
		}
	}
};	
function encounter(button){
	var confirm = button.id;
	switch(confirm){
		case "yes":
			battle = 1;
			board[playerRow][playerCol].challenge();
			break;
		case "no":
			document.getElementById("battle").innerHTML = "You chose to run!";
			break;
	}
}

function game(button){
		var dir = button.id;
		switch(dir){
			case "up"://1,7 3,2 6,1
				if(playerRow == 0){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if(board[playerRow - 1][playerCol] == board[1][7]||board[playerRow - 1][playerCol] == board[3][2]||board[playerRow - 1][playerCol] == board[6][1]){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
				board[playerRow-1][playerCol] = "W";
			}
			else if(board[playerRow - 1][playerCol] == board[7][0]){
				prizeCounter++;
				playerRow = playerRow - 1;
				board[playerRow][playerCol] = "P";
				document.getElementById("text").innerHTML = "You got a Prize!!!! <br/> Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow - 1][playerCol] == board[0][6]||board[playerRow - 1][playerCol] == board[1][6]||
			board[playerRow - 1][playerCol] == board[2][0]||board[playerRow - 1][playerCol] == board[2][2]||board[playerRow - 1][playerCol] == board[2][5]||
			board[playerRow - 1][playerCol] == board[3][1]||board[playerRow - 1][playerCol] == board[4][4]||board[playerRow - 1][playerCol] == board[5][5]||
			board[playerRow - 1][playerCol] == board[6][2]||board[playerRow - 1][playerCol] == board[7][7]){
				playerRow = playerRow - 1;
				board[playerRow][playerCol] = "C";
				document.getElementById("battle").innerHTML = "You encountered an enemy! Will you fight?";
				encounter();
				
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow - 1][playerCol] == "G" && prizeCounter >= 2){
				playerRow = playerRow - 1;
				board[playerRow][playerCol] = "G";
				document.getElementById("text").innerHTML ="<h3>Congragulations! You have killed yourself!</h3>";
				victory++;
			}
			else{
				playerRow = playerRow - 1;
				board[playerRow][playerCol] = "O";
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			break;

			case "down":
				if(playerRow == 7){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if(board[playerRow + 1][playerCol] == board[1][7]||board[playerRow + 1][playerCol] == board[3][2]||board[playerRow + 1][playerCol] == board[6][1]){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
				board[playerRow+1][playerCol] = "W";
			}
			else if(board[playerRow + 1][playerCol] == board[7][0]){
				prizeCounter++;
				playerRow = playerRow + 1;
				board[playerRow][playerCol] = "P";
				document.getElementById("text").innerHTML = "You got a Prize!!!! <br/> Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow + 1][playerCol] == board[0][6]||board[playerRow + 1][playerCol] == board[1][6]||
			board[playerRow + 1][playerCol] == board[2][0]||board[playerRow + 1][playerCol] == board[2][2]||board[playerRow + 1][playerCol] == board[2][5]||
			board[playerRow + 1][playerCol] == board[3][1]||board[playerRow + 1][playerCol] == board[4][4]||board[playerRow + 1][playerCol] == board[5][5]||
			board[playerRow + 1][playerCol] == board[6][2]||board[playerRow + 1][playerCol] == board[7][7]){
				playerRow = playerRow + 1;
				board[playerRow][playerCol] = "C";
				document.getElementById("battle").innerHTML = "You encountered an enemy! Will you fight?";
				encounter();
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow + 1][playerCol] == "G" && prizeCounter >= 2){
				playerRow = playerRow + 1;
				board[playerRow][playerCol] ="G";
				document.getElementById("text").innerHTML ="<h3>Congragulations! You have killed yourself!</h3>";
				victory++;
			}
			else{
				playerRow = playerRow + 1;
				board[playerRow][playerCol] ="O";
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			break;

			case "left":
				if(playerCol == 0){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if(board[playerRow][playerCol -1] == board[1][7]||board[playerRow][playerCol-1] == board[3][2]||board[playerRow][playerCol-1] == board[6][1]){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
				board[playerRow][playerCol - 1] = "W;"
			}
			else if(playerCol == 1 || board[playerRow][playerCol - 1] == board[7][0]){
				prizeCounter++;
				playerCol = playerCol - 1;
				board[playerRow][playerCol] = "P";
				
				document.getElementById("text").innerHTML = "You got a Prize!!!! <br/> Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow][playerCol - 1] == board[0][6]||board[playerRow][playerCol - 1] == board[1][6]||
			board[playerRow][playerCol - 1] == board[2][0]||board[playerRow][playerCol - 1] == board[2][2]||board[playerRow][playerCol - 1] == board[2][5]||
			board[playerRow][playerCol - 1] == board[3][1]||board[playerRow][playerCol - 1] == board[4][4]||board[playerRow][playerCol - 1] == board[5][5]||
			board[playerRow][playerCol - 1] == board[6][2]||board[playerRow][playerCol - 1] == board[7][7]){
				playerCol = playerCol - 1;
				board[playerRow][playerCol] ="C";
				document.getElementById("battle").innerHTML = "You encountered an enemy! Will you fight?";
				encounter();
				
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow][playerCol - 1] == "G" && prizeCounter >= 2){
				playerCol = playerCol - 1;
				board[playerRow][playerCol] = "G";
				document.getElementById("text").innerHTML ="<h3>Congragulations! You have killed yourself!</h3>";
				victory++;
			}
			else{
				playerCol = playerCol - 1;
				board[playerRow][playerCol] = "O";
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			break;

			case "right":
				if(playerCol == 7){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";

			}
			else if(board[playerRow][playerCol+1] == board[1][7]||board[playerRow][playerCol+1] == board[3][2]||board[playerRow][playerCol+1] == board[6][1]){
				document.getElementById("text").innerHTML = "You can't go there!!! <br/>Your Position is ("+ playerRow +","+ playerCol+")";
				board[playerRow][playerCol+1] ="W";
			}
			else if(playerCol == 1 || board[playerRow][playerCol + 1] == board[7][0]){
				prizeCounter++;
				playerCol = playerCol + 1;
				board[playerRow][playerCol] = "P";
				document.getElementById("text").innerHTML = "You got a Prize!!!! <br/> Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow][playerCol + 1] == board[0][6]||board[playerRow][playerCol + 1] == board[1][6]||
			board[playerRow][playerCol + 1] == board[2][0]||board[playerRow][playerCol + 1] == board[2][2]||board[playerRow][playerCol + 1] == board[2][5]||
			board[playerRow][playerCol + 1] == board[3][1]||board[playerRow][playerCol + 1] == board[4][4]||board[playerRow][playerCol + 1] == board[5][5]||
			board[playerRow][playerCol + 1] == board[6][2]||board[playerRow][playerCol + 1] == board[7][7]){
				playerCol = playerCol + 1;
				board[playerRow][playerCol] = "C";
				document.getElementById("battle").innerHTML = "You encountered an enemy! Will you fight?";
				encounter();
				
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			else if (board[playerRow][playerCol + 1] == "G" && prizeCounter >= 2){
				playerCol = playerCol + 1;
				board[playerRow][playerCol] = "G";
				document.getElementById("text").innerHTML ="<h3>Congragulations! You have killed yourself!</h3>";
				victory++;
			}
			else{
				playerCol = playerCol + 1;
				board[playerRow][playerCol] = "O";
				document.getElementById("text").innerHTML = "Your Position is ("+ playerRow +","+ playerCol+")";
			}
			break;
			case "stats":
				document.getElementById("stat").innerHTML = "Health: " + player.hp + "<br/>Prize: "+prizeCounter+"<br/>";
			break;
		}
	
}