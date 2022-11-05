let arr = [1, 2, 3, 4, 5, 6];
document.getElementById("dice").addEventListener("click", rollDice);
function rollDice() {
  let member1 = document.getElementById("member1");
  member1.style.backgroundColor = "White";
  let member2 = document.getElementById("member2");
  member2.style.backgroundColor = "White";
  let member3 = document.getElementById("member3");
  member3.style.backgroundColor = "White";
  let m1 = arr[Math.floor(Math.random() * arr.length)];
  let m2 = arr[Math.floor(Math.random() * arr.length)];
  let m3 = arr[Math.floor(Math.random() * arr.length)];

  member1.innerText = m1;
  member2.innerText = m2;
  member3.innerText = m3;
  let winVal = Math.max(m1, m2, m3);
  let least = Math.min(m1, m2, m3);
  if (winVal == m1 && winVal != m2 && winVal != m3) {
    document.getElementById("winner").innerText = "Member1";
    member1.style.backgroundColor = "Green";
  } else if (winVal == m2 && winVal != m1 && winVal != m3) {
    document.getElementById("winner").innerText = "Member2";
    member2.style.backgroundColor = "Green";
  } else if (winVal == m3 && winVal != m1 && winVal != m2) {
    document.getElementById("winner").innerText = "Member3";
    member3.style.backgroundColor = "Green";
  }
  if (least == m1 && least != m2 && least != m3) {
    document.getElementById("winner").innerText = "Member1";
    member1.style.backgroundColor = "Red";
  } else if (least == m2 && least != m1 && least != m3) {
    document.getElementById("winner").innerText = "Member2";
    member2.style.backgroundColor = "Red";
  } else if (least == m3 && least != m1 && least != m2) {
    document.getElementById("winner").innerText = "Member3";
    member3.style.backgroundColor = "Red";
  }
  if (winVal == m1 && winVal == m2 && winVal != m3) {
    document.getElementById("winner").innerText = "Member1 & Member2";
    member2.style.backgroundColor = "Blue";
    member1.style.backgroundColor = "Blue";
  } else if (winVal == m1 && winVal == m3 && winVal != m2) {
    document.getElementById("winner").innerText = "Member1 & Member3";
    member3.style.backgroundColor = "Blue";
    member1.style.backgroundColor = "Blue";
  } else if (winVal == m1 && winVal == m3 && winVal == m2) {
    document.getElementById("winner").innerText = "No Contest";
    member3.style.backgroundColor = "Blue";
    member1.style.backgroundColor = "Blue";
    member2.style.backgroundColor = "Blue";
  } else if (winVal == m2 && winVal == m3 && winVal != m1) {
    document.getElementById("winner").innerText = "Member2 & Member3";
    member3.style.backgroundColor = "Blue";
    member2.style.backgroundColor = "Blue";
  }
}
