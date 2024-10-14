# rocketapp

## Run steps with Rust package manager 'Cargo':
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
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.40s
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
   >> X-Content-Type-Options: nosniff
   >> X-Frame-Options: SAMEORIGIN
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
GET / text/html:
   >> Matched: (root) GET /
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