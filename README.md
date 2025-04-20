# Star Chart Client: Web

Captures workouts you did so you can visualize all the stars you've earned on your calendar.


## CI/CD
This repo uses github actions for CI/CD

### act

The pipeline can be debugged locally with [act](https://nektosact.com/usage/index.html)

```
brew install act
```

Act doesn't seem to care about the `--platform` / `-p` flag you pass to it when you have an ~/.actrc. You can set it in the ~/.actrc:
```
-P ubuntu-latest=catthehacker/ubuntu:act-latest
--container-daemon-socket -
```

If you don't want to configure giving `act` your docker credentials you can download the runner with `docker pull {image}` and run act with `--pull=false`

Most commonly used command to test the pipeline:
```
act push --pull=false
```
