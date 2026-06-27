/*
  ============================================================
  Maggie Lab 作品資料檔（works-data.js）
  ============================================================
  這是全站唯一的作品資料來源，index.html 跟 Explore.html
  都讀這一份，妳只需要維護這一個檔案。

  新增一個作品時，複製下面任何一筆，貼上修改就好：

  {
    title: "作品名稱",
    type: "game",              // 只能寫 "game" / "tool" / "reading" 三種之一
    status: "done",            // "done" = 已完成上線；"testing" = 還在體驗家庭測試中
    featured: false,           // true 才會出現在首頁「精選作品」，最多建議 3～6 個
    description: "一句話介紹，只有 done 狀態才需要寫",
    cover: "images/xxx.webp",  // 封面圖路徑，圖片請放進 images 資料夾
    playUrl: "https://...",    // 遊戲/工具的真實連結，testing 狀態請填 null
    introUrl: "xxx.html"       // 作品介紹頁檔名，testing 狀態請填 null
  },

  注意事項：
  - 每筆資料之間要用逗號分開，最後一筆後面不要加逗號
  - 文字要放在雙引號 " " 裡面
  - status 寫 "testing" 的作品，playUrl 跟 introUrl 一律填 null（不是文字，不要加引號）
  - cover 還沒有圖片時，先填 null，首頁的「體驗家庭進行中」會自動跳過沒有圖的項目
  ============================================================
*/

const works = [
  {
    title: "Pet Habit Kingdom",
    type: "game",
    status: "done",
    featured: true,
    description: "和寵物一起，把每天的小習慣，養成一個會長大的家。",
    cover: "images/pet-habit-card.webp",
    playUrl: "https://maggie10299.github.io/pet-habit/",
    introUrl: "PetHabitKingdom.html"
  },
  {
    title: "注音打字冒險",
    type: "game",
    status: "testing",
    featured: false,
    description: "",
    cover: "images/zhuyin-cover.webp",
    playUrl: null,
    introUrl: null
  },
  {
    title: "七習慣島嶼",
    type: "game",
    status: "testing",
    featured: false,
    description: "",
    cover: null,
    playUrl: null,
    introUrl: null
  },
  {
    title: "睡前聊聊",
    type: "tool",
    status: "testing",
    featured: false,
    description: "",
    cover: null,
    playUrl: null,
    introUrl: null
  },
  {
    title: "閱讀旅程",
    type: "reading",
    status: "testing",
    featured: false,
    description: "",
    cover: null,
    playUrl: null,
    introUrl: null
  }
];
