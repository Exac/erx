# erx

## Run

To run, open your cli to the directory where you downloaded erx.

```
  npm install
  npm run run
```

## Installation

You need NodeJS installed in order to develop the project. If you can't use npm commands, use these instead.

### Mac

```bash
git clone git://github.com/ry/node.git
cd node
./configure
make
sudo make install
```

### Windows
```bash
$client = new-object System.Net.WebClient
$client.DownloadFile(https://nodejs.org/dist/v6.10.3/node-v6.10.3-x64.msi,C:\install-nodejs.msi)
cd /
install-nodejs.msi
```

### Ubuntu/Mint Linux

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

### Arch Linux

```bash
pacman -S nodejs npm
```

### Gentoo

```bash
emerge nodejs
```

### RHEL/CentOS/Fedora
```bash
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
```

