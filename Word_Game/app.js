var word = "";
var correct_Letters = [];
var wrong_Letters = [];
var chances_Left = 0;
var word_Count = 1;
var lvl = 0;

function words1() {
  var randomWords = ["java", "shell", "html", "sql"];
  var random_num = Math.floor(Math.random() * 4);
  return randomWords[random_num];
}

function words2() {
  var randomWords = ["dotnet", "software", "catch"];
  var random_num = Math.floor(Math.random() * 3);
  return randomWords[random_num];
}

function words3() {
  var randomWords = ["csharp", "inheritance", "constructor"];
  var random_num = Math.floor(Math.random() * 3);
  return randomWords[random_num];
}

function wordCount() {
  var count = word.length;
  return count;
}

function wordFiller() {
  var wordLength = word.length;
  var count = wordLength;

  while (count > 0) {
    correct_Letters.push(" _ ");
    count = count - 1;
  }
}

function level1() {
  document.getElementById("Btn_Beep").play();
  lvl = 1;
  document.getElementById("startbtn").style.display = "block";
  document.getElementById("LevelSelection").style.display = "none";
}

function level2() {
  document.getElementById("Btn_Beep").play();
  lvl = 2;
  document.getElementById("startbtn").style.display = "block";
  document.getElementById("LevelSelection").style.display = "none";
}

function level3() {
  document.getElementById("Btn_Beep").play();
  lvl = 3;
  document.getElementById("startbtn").style.display = "block";
  document.getElementById("LevelSelection").style.display = "none";
}

function start() {
  document.getElementById("Btn_Beep").play();
  if (lvl == 1) {
    word = words1();
  }
  if (lvl == 2) {
    word = words2();
  }
  if (lvl == 3) {
    word = words3();
  }
  word_Count = wordCount();

  if (lvl == 1) {
    chances_Left = word.length + 3;
  } else if (lvl == 2) {
    chances_Left = word.length + 2;
  } else if (lvl == 3) {
    chances_Left = word.length + 1;
  }

  document.getElementById("mainScreen").style.display = "block";
  document.getElementById("startbtn").style.display = "none";

  document.getElementById("inputGuess").innerHTML = "Enter a letter";

  wordFiller();

  document.getElementById("guessDetails").style.display = "block";
  document.getElementById("correctAns").innerHTML =
    "Correct Answer :  " + correct_Letters;
  document.getElementById("wrongAns").innerHTML =
    "Wrong Letters : " + wrong_Letters;
  document.getElementById("remainingChances").innerHTML =
    "Chances Remaining : " + chances_Left;
}

function enterInput() {
  document.getElementById("Btn_Beep").play();
  var inp = document.getElementById("guess").value;
  document.getElementById("guess").value = "";

  if (inp.length === 1) {
    var letter_Exists = letterCheck(inp);
    if (letter_Exists == true) {
      wordExists(inp);
    } else {
      if (!wrong_Letters.includes(inp)) {
        document.getElementById("wrong").play();
        wrong_Letters.push(inp);
      }
      chances_Left = chances_Left - 1;
    }
  } else if (inp.length < 1) {
    alert("Please Enter atleast one character");
  }

  if (chances_Left <= 0) {
    document.getElementById("wrong").play();
    lose();
  }

  if (word_Count <= 0) {
    win();
  }
  document.getElementById("correctAns").innerHTML =
    "Correct Answer :  " + correct_Letters;
  document.getElementById("wrongAns").innerHTML =
    "Wrong Letters : " + wrong_Letters;
  document.getElementById("remainingChances").innerHTML =
    "Chances Remaining : " + chances_Left;
}

function letterCheck(a) {
  var n = word.includes(a);
  return n;
}

function wordExists(letter) {
  var count = 0;

  while (count <= word.length - 1) {
    if (word[count] === letter) {
      document.getElementById("correct").play();
      correct_Letters[count] = letter;
      word_Count = word_Count - 1;
      count += 1;
    } else {
      count += 1;
    }
  }
}

function lose() {
  document.getElementById("mainScreen").style.display = "none";
  document.getElementById("guessDetails").style.display = "none";
  document.getElementById("lost").style.display = "block";
  document.getElementById("correctWord").innerHTML =
    "The correct word was " + word;
}

function win() {
  document.getElementById("mainScreen").style.display = "none";
  document.getElementById("guessDetails").style.display = "none";
  document.getElementById("clap").play();
  document.getElementById("won").style.display = "block";
  document.getElementById("goto").play();
}

function restart() {
  document.getElementById("mainScreen").style.display = "none";
  document.getElementById("guessDetails").style.display = "none";
  document.getElementById("lost").style.display = "none";
  document.getElementById("won").style.display = "none";
  if (lvl == 1) {
    word = "";
    correct_Letters = [];
    wrong_Letters = [];
    chances_Left = 0;
    word_Count = 1;
    lvl = 2;
    document.getElementById("startbtn").style.display = "block";
  } else if (lvl == 2) {
    word = "";
    correct_Letters = [];
    wrong_Letters = [];
    chances_Left = 0;
    word_Count = 1;
    lvl = 3;
    document.getElementById("startbtn").style.display = "block";
  } else {
    document.getElementById("LevelSelection").style.display = "block";
    word = "";
    correct_Letters = [];
    wrong_Letters = [];
    chances_Left = 0;
    word_Count = 1;
    lvl = 0;
  }

}