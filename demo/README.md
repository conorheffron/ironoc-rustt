# demo

## Hello World Demo with Rust

### Cargo Rust Compiler Version Check
```shell
cargo rustc --bin demo -- --version
```
##### Console Output
```shell
warning: unused manifest key: package.style_edition
Compiling demo v1.0.4 (/Users/conorheffron/workspace/ironoc_r/demo)
rustc 1.90.0 (1159e78c4 2025-09-14)
Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.31s
```
### Build Demo App
```shell
wasm-pack build --target web
```
##### Console Output
```shell
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
warning: unused manifest key: package.style_edition
   Compiling demo v1.0.2 (/Users/conorheffron/workspace/ironoc_r/demo)
    Finished `release` profile [optimized] target(s) in 0.89s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: ✨   Done in 1.60s
[INFO]: 📦   Your wasm pkg is ready to publish at /Users/conorheffron/workspace/ironoc_r/demo/pkg.
[WARN]: ⚠️   There's a newer version of wasm-pack available, the new version is: 0.13.1, you are using: 0.13.0. To update, navigate to: https://rustwasm.github.io/wasm-pack/installer/
conorheffron@Conors-MacBook-Pro demo % http-server .               
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

^Chttp-server stopped.
conorheffron@Conors-MacBook-Pro demo % wasm-pack build --target web
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
warning: unused manifest key: package.style_edition
   Compiling wasm-bindgen-shared v0.2.105
   Compiling proc-macro2 v1.0.103
   Compiling unicode-ident v1.0.20
   Compiling quote v1.0.41
   Compiling rustversion v1.0.22
   Compiling bumpalo v3.19.0
   Compiling once_cell v1.21.3
   Compiling cfg-if v1.0.4
   Compiling wasm-bindgen v0.2.105
   Compiling syn v2.0.108
   Compiling wasm-bindgen-macro-support v0.2.105
   Compiling wasm-bindgen-macro v0.2.105
   Compiling demo v1.0.4 (/Users/conorheffron/workspace/ironoc_r/demo)
    Finished `release` profile [optimized] target(s) in 15.67s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: ✨   Done in 16.59s
[INFO]: 📦   Your wasm pkg is ready to publish at /Users/conorheffron/workspace/ironoc_r/demo/pkg.
[WARN]: ⚠️   There's a newer version of wasm-pack available, the new version is: 0.13.1, you are using: 0.13.0. To update, navigate to: https://rustwasm.github.io/wasm-pack/installer/
```
### Run Server
```shell
http-server .  
```
##### Console Output
```shell             
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

[Wed Oct 29 2025 22:40:16 GMT+0000 (Greenwich Mean Time)]  "GET /" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
(node:43979) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)                                                                                                                                           
[Wed Oct 29 2025 22:40:16 GMT+0000 (Greenwich Mean Time)]  "GET /index.js" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
[Wed Oct 29 2025 22:40:16 GMT+0000 (Greenwich Mean Time)]  "GET /pkg/demo.js" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
[Wed Oct 29 2025 22:40:16 GMT+0000 (Greenwich Mean Time)]  "GET /pkg/demo_bg.wasm" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
```
### Browser (may not work in chrome...try safari :D):
![wasm-pack-hw](../screenshots/demo/wasm-pack-hw.png?raw=true "Hello World App with Rust & wasm-pack / httpserver")

### Run `main.rs`
```shell
cargo run --bin demo
```
### Run `main.rs` Console Output
```shell
warning: unused manifest key: package.style_edition
Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.43s
Running `target/debug/demo`
cargo:rustc-cfg=RUSTC_IS_STABLE
cargo:rustc-cfg=compiler_has_important_bugfix
```
