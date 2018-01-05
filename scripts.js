function rarity_check(string) {
  if (string === "小丑" ||
      string === "夜行者" ||
      string === "原谅色" ||
      string === "队长" ||
      string === "泰迪女侠") {
    console.log("LEGENDARY!!!!!!!");
    return true;
  } else if (string === "魔法师" ||
      string === "精灵宝贝" ||
      string === "侦探" ||
      string === "忍者" ||
      string === "八道夫" ||
      string == "柯柯" ||
      string == "帝国战士" ||
      string == "龙猫" ||
      string == "剪刀手" ||
      string == "美少女") {
    console.log("EPIC");
    return true;
  } else {
    console.log("garbage");
    return false;
  }
};

function iterate_over_text(element) {
  return Array.from(element.getElementsByClassName("pet-info")).some(
    function(foo) {
      var name = element.querySelectorAll("h3")[0].innerText;
      if (rarity_check(name)) {
        element.getElementsByClassName("pet-ct")[0].click();
        return true;
      }
    }
  )
}

function iterate_over_card() {
  return Array.from(document.getElementsByClassName("card")).some(
    function(element) {
      if (iterate_over_text(element)) {
        return true;
      }
    }
  );
}

if (!iterate_over_card()) {
  location.reload();
}
