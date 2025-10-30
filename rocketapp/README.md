# rocketapp

[![Rust CI for Rocket App](https://github.com/conorheffron/ironoc-rustt/actions/workflows/rust-ci-rocket.yml/badge.svg)](https://github.com/conorheffron/ironoc-rustt/actions/workflows/rust-ci-rocket.yml)

## Run steps with Rust package manager 'Cargo':
### Check for updates
```shell
cargo update
```
### Verify versions
##### Check Cargo Version
```shell
cargo -V
```
###### Check Cargo Version Output
```shell
cargo 1.90.0 (840b83a10 2025-07-30)
```
#### Check Rust Compiler Version
```shell
rustc -V
```
###### Check Rust Compiler Version Output
```shell
rustc 1.90.0 (1159e78c4 2025-09-14)
```
#### Check Toolchain Version
```shell
rustup show
```

#### Update Local with latest compatible versions
```shell
cargo update
```
##### Console Output
```shell
    Updating crates.io index
     Locking 0 packages to latest Rust 1.90.0 compatible versions
```
### Build Rocket App
```shell
cargo build
```
##### Console Output
```shell
warning: unused manifest key: package.style_edition
    Blocking waiting for file lock on build directory
   Compiling memchr v2.7.6
   Compiling pin-project-lite v0.2.16
   Compiling itoa v1.0.15
   Compiling cfg-if v1.0.4
   Compiling libc v0.2.177
   Compiling serde_core v1.0.228
   Compiling bytes v1.10.1
   Compiling pin-utils v0.1.0
   Compiling siphasher v1.0.1
   Compiling hashbrown v0.16.0
   Compiling fnv v1.0.7
   Compiling equivalent v1.0.2
   Compiling futures-core v0.3.31
   Compiling once_cell v1.21.3
   Compiling futures-sink v0.3.31
   Compiling phf_shared v0.11.3
   Compiling log v0.4.28
   Compiling tracing-core v0.1.34
   Compiling httparse v1.10.1
   Compiling crossbeam-utils v0.8.21
   Compiling futures-channel v0.3.31
   Compiling http v0.2.12
   Compiling tracing v0.1.41
   Compiling socket2 v0.6.1
   Compiling mio v1.1.0
   Compiling signal-hook-registry v1.4.6
   Compiling try-lock v0.2.5
   Compiling num-conv v0.1.0
   Compiling time-core v0.1.6
   Compiling inlinable_string v0.1.15
   Compiling futures-task v0.3.31
   Compiling powerfmt v0.2.0
   Compiling futures-io v0.3.31
   Compiling slab v0.4.11
   Compiling deranged v0.5.5
   Compiling time-macros v0.2.24
   Compiling want v0.3.1
   Compiling futures-util v0.3.31
   Compiling socket2 v0.5.10
   Compiling aho-corasick v1.1.4
   Compiling tokio v1.48.0
   Compiling http-body v0.4.6
   Compiling phf_generator v0.11.3
   Compiling tower-service v0.3.3
   Compiling httpdate v1.0.3
   Compiling ucd-trie v0.1.7
   Compiling bitflags v2.10.0
   Compiling smallvec v1.15.1
   Compiling percent-encoding v2.3.2
   Compiling regex-syntax v0.8.8
   Compiling pest v2.8.3
   Compiling time v0.3.44
   Compiling serde v1.0.228
   Compiling indexmap v2.12.0
   Compiling phf_codegen v0.11.3
   Compiling zerocopy v0.8.27
   Compiling is-terminal v0.4.17
   Compiling getrandom v0.2.16
   Compiling phf v0.11.3
   Compiling regex-automata v0.4.13
   Compiling same-file v1.0.6
   Compiling walkdir v2.5.0
   Compiling ref-cast v1.0.25
   Compiling chrono-tz-build v0.3.0
   Compiling rand_core v0.6.4
   Compiling cookie v0.18.1
   Compiling yansi v1.0.1
   Compiling serde_spanned v0.6.9
   Compiling toml_datetime v0.6.11
   Compiling pest_meta v2.8.3
   Compiling crossbeam-epoch v0.9.18
   Compiling stable-pattern v0.1.0
   Compiling bstr v1.12.1
   Compiling either v1.15.0
   Compiling unic-common v0.9.0
   Compiling winnow v0.7.13
   Compiling core-foundation-sys v0.8.7
   Compiling state v0.6.0
   Compiling unic-char-range v0.9.0
   Compiling toml_write v0.1.2
   Compiling pest_generator v2.8.3
   Compiling unic-char-property v0.9.0
   Compiling futures v0.3.31
   Compiling iana-time-zone v0.1.64
   Compiling ppv-lite86 v0.2.21
   Compiling unic-ucd-version v0.9.0
   Compiling crossbeam-deque v0.8.6
   Compiling num-traits v0.2.19
   Compiling rand_chacha v0.3.1
   Compiling pear v0.2.9
   Compiling tokio-util v0.7.16
   Compiling globset v0.4.18
   Compiling chrono-tz v0.9.0
   Compiling uncased v0.9.10
   Compiling h2 v0.3.27
   Compiling errno v0.3.14
   Compiling toml_edit v0.22.27
   Compiling ryu v1.0.20
   Compiling scopeguard v1.2.0
   Compiling lock_api v0.4.14
   Compiling serde_json v1.0.145
   Compiling rustix v1.1.2
   Compiling hyper v0.14.32
   Compiling ignore v0.4.24
   Compiling chrono v0.4.42
   Compiling pest_derive v2.8.3
   Compiling rand v0.8.5
   Compiling unic-ucd-segment v0.9.0
   Compiling libm v0.2.15
   Compiling rocket_http v0.5.1
   Compiling toml v0.8.23
   Compiling getrandom v0.3.4
   Compiling parking_lot_core v0.9.12
   Compiling http v1.3.1
   Compiling encoding_rs v0.8.35
   Compiling spin v0.9.8
   Compiling deunicode v1.6.2
   Compiling fastrand v2.3.0
   Compiling mime v0.3.17
   Compiling tempfile v3.23.0
   Compiling slug v0.1.6
   Compiling humansize v2.1.3
   Compiling thiserror v1.0.69
   Compiling async-stream v0.3.6
   Compiling figment v0.10.19
   Compiling parking_lot v0.12.5
   Compiling unic-segment v0.9.0
   Compiling multer v3.1.0
   Compiling globwalk v0.9.1
   Compiling tokio-stream v0.1.17
   Compiling rocket_codegen v0.5.1
   Compiling regex v1.12.2
   Compiling ubyte v0.10.4
   Compiling crossbeam-channel v0.5.15
   Compiling fsevent-sys v4.1.0
   Compiling filetime v0.2.26
   Compiling num_cpus v1.17.0
   Compiling binascii v0.1.4
   Compiling atomic v0.5.3
   Compiling lazy_static v1.5.0
   Compiling handlebars v5.1.2
   Compiling normpath v1.5.0
   Compiling notify v6.1.1
   Compiling tera v1.20.0
   Compiling rocket v0.5.1
   Compiling rocket_dyn_templates v0.2.0
   Compiling rocketapp v1.0.4 (/Users/conorheffron/workspace/ironoc_r/rocketapp)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 2m 19s
```
### Run Rocket App
```shell
cargo run
```
##### Console Output
```shell
warning: unused manifest key: package.style_edition
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.69s
     Running `target/debug/rocketapp`
🔧 Configured for debug.
   >> address: 127.0.0.1
   >> port: 8000
   >> workers: 8
   >> max blocking threads: 512
   >> ident: Rocket
   >> IP header: X-Real-IP
   >> limits: bytes = 8KiB, data-form = 2MiB, file = 1MiB, form = 32KiB, json = 1MiB, msgpack = 1MiB, string = 8KiB
   >> temp dir: /var/folders/90/vm59v1w170n_62vbrwvd6m100000gn/T/
   >> http/2: true
   >> keep-alive: 5s
   >> tls: disabled
   >> shutdown: ctrlc = true, force = true, signals = [SIGTERM], grace = 2s, mercy = 3s
   >> log level: normal
   >> cli colors: true
📬 Routes:
   >> (root) GET /
   >> (create) POST /
   >> (hello) GET /hi?<name>
   >> (FileServer: public) GET /public/<path..> [10]
📡 Fairings:
   >> Templating (ignite, liftoff, request)
   >> Shield (liftoff, response, singleton)
🛡️ Shield:
   >> Permissions-Policy: interest-cohort=()
   >> X-Frame-Options: SAMEORIGIN
   >> X-Content-Type-Options: nosniff
📐 Templating:
   >> directory: templates
   >> engines: ["tera", "hbs"]
🚀 Rocket has launched from http://127.0.0.1:8000
GET / text/html:
   >> Matched: (root) GET /
   >> Outcome: Success(200 OK)
   >> Response succeeded.
GET /public/css/pico.min.css text/css:
   >> Matched: (FileServer: public) GET /public/<path..> [10]
   >> Outcome: Success(200 OK)
   >> Response succeeded.
POST / multipart/form-data:
   >> Matched: (create) POST /
   >> Outcome: Success(303 See Other)
   >> Response succeeded.
GET /hi?name=Conor%20Heffron text/html:
   >> Matched: (hello) GET /hi?<name>
   >> Outcome: Success(200 OK)
   >> Response succeeded.
GET /public/css/pico.min.css text/css:
   >> Matched: (FileServer: public) GET /public/<path..> [10]
   >> Outcome: Success(200 OK)
   >> Response succeeded.
```

## Verify rocket app is running:
### Hi end-point / view that takes name request parameter.
```
http://localhost:8000/hi?name=conair
```

![hi-endp-with-req-param2](../screenshots/rocket/hi-endp-with-req-param2.png?raw=true "Endpoint with Request Parameter")

### Home page / form view.
```
http://localhost:8000/
```

![err-form-view](../screenshots/rocket/err-form-view.png?raw=true "Error Form View for Empty Fields")

![err-form-view2](../screenshots/rocket/err-form-view2.png?raw=true "Error Form View for Empty Field")

![form-success-view](../screenshots/rocket/form-success-view.png?raw=true "Form Submit Success View")
