# demo

## Hello World with Rust

Compile with `wasm-pack build --target web`

conorheffron@...demo> wasm-pack build --target web
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
Finished `release` profile [optimized] target(s) in 0.06s
warning: the following packages contain code that will be rejected by a future version of Rust: wasm-bindgen v0.2.45
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: ✨   Done in 1.45s
[INFO]: 📦   Your wasm pkg is ready to publish at /Users/conorheffron/workspace/ironoc_r/demo/pkg.
conorheffron@Conors-MacBook-Pro ~/w/i/demo> http-server .
Starting up http-server, serving .

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
http://127.0.0.1:8080
http://192.168.0.14:8080
http://10.5.0.2:8080
Hit CTRL-C to stop the server

[Sun Oct 13 2024 10:27:33 GMT+0100 (Irish Standard Time)]  "GET //" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
(node:92122) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)
[Sun Oct 13 2024 10:27:33 GMT+0100 (Irish Standard Time)]  "GET //index.js" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
[Sun Oct 13 2024 10:27:33 GMT+0100 (Irish Standard Time)]  "GET //index.js" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
[Sun Oct 13 2024 10:27:34 GMT+0100 (Irish Standard Time)]  "GET //" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
[Sun Oct 13 2024 10:27:34 GMT+0100 (Irish Standard Time)]  "GET //" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
[Sun Oct 13 2024 10:27:36 GMT+0100 (Irish Standard Time)]  "GET //" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"

