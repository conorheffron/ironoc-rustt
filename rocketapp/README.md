# rocketapp

## Run steps with Rust package manager 'Cargo'
```shell
conorheffron@...rocketapp> cargo build
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1.19s
conorheffron@...rocketapp> cargo update
    Updating crates.io index
     Locking 0 packages to latest compatible versions
note: pass `--verbose` to see 37 unchanged dependencies behind latest
conorheffron@...rocketapp> cargo build
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.48s
conorheffron@...rocketapp> cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.16s
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
   >> Shield (liftoff, response, singleton)
   >> Templating (ignite, liftoff, request)
🛡️ Shield:
   >> X-Content-Type-Options: nosniff
   >> X-Frame-Options: SAMEORIGIN
   >> Permissions-Policy: interest-cohort=()
📐 Templating:
   >> directory: templates
   >> engines: ["tera", "hbs"]
🚀 Rocket has launched from http://127.0.0.1:8000
```

## Verify rocket app is running:
```
http://localhost:8000/hi?name=conair
```

```
http://localhost:8000/
```