// AI APP SPEC ENGINE (REAL CORE IDEA)

function generateAppSpec(prompt) {

  const type =
    prompt.includes("chat") ? "chat" :
    prompt.includes("store") ? "ecommerce" :
    prompt.includes("social") ? "social" : "custom";

  const base = {
    id: crypto.randomUUID(),
    name: "AI App",
    type,
    pages: [],
    components: {},
    logic: "",
    timestamp: Date.now()
  };

  if (type === "chat") {
    base.name = "Chat Application";
    base.pages = ["Chat", "Contacts", "Settings"];
    base.components = {
      Chat: ["message_list", "input", "send_button"],
      Contacts: ["search", "user_list"],
      Settings: ["theme_toggle"]
    };
    base.logic = "Realtime messaging architecture + socket simulation";
  }

  if (type === "social") {
    base.name = "Social App";
    base.pages = ["Feed", "Profile", "Upload"];
    base.components = {
      Feed: ["posts", "like", "comment"],
      Upload: ["image_picker", "caption"],
      Profile: ["user_info", "grid"]
    };
    base.logic = "Feed ranking + post interaction system";
  }

  if (type === "ecommerce") {
    base.name = "Shop App";
    base.pages = ["Home", "Product", "Cart", "Checkout"];
    base.components = {
      Home: ["products", "search"],
      Product: ["gallery", "buy_button"],
      Cart: ["items", "total"]
    };
    base.logic = "Cart system + checkout flow engine";
  }

  if (type === "custom") {
    base.name = "Custom App";
    base.pages = ["Home", "Settings"];
    base.components = {
      Home: ["text", "button"],
      Settings: ["toggles"]
    };
    base.logic = "Generic UI builder runtime";
  }

  return base;
}