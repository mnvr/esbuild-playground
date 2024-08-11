const read = (f) => require("node:fs").readFileSync(f, "utf-8");

console.log(
    read("index.html").replace("<!-- PLACEHOLDER -->", read("build/server.out"))
);
