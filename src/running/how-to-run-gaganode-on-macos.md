# GaGaNode MacOS'ta Nasıl Çalıştırılır?

>MacOS'ta GaGaNode nasıl kolayca kurulur.

[[toc]]

## Kaydolun

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register-v2.png)

“[Install & Run](https://dashboard.gaganode.com/install_run)” butonuna tıklayın, Bu sayfada tokeninizi ve kurulum eğitimini bulabilirsiniz.

![](./../images/running/install_run_3.png)

## 1.İndirin & Kurun

[Mac'inizdeki](https://support.apple.com/guide/terminal/welcome/2.13/mac) terminal uygulamasında <img src="./images/../../images/running/terminal.png" height="20"/> aşağıdakilerden birini yapın:

```bash
curl -o apphub-darwin-amd64.tar.gz https://assets.coreservice.io/public/package/58/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-darwin-amd64.tar.gz && rm -f apphub-darwin-amd64.tar.gz && cd ./apphub-darwin-amd64 && ./apphub service install
```

konsol çıktısı:

```bash
curl -o apphub-darwin-amd64.tar.gz https://assets.coreservice.io/public/package/58/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-darwin-amd64.tar.gz && rm -f apphub-darwin-amd64.tar.gz && cd ./apphub-darwin-amd64 && ./apphub service install
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 8161k  100 8161k    0     0  3053k      0  0:00:02  0:00:02 --:--:-- 3061k
Install app service:					[  OK  ]
```

## 2.Hizmeti Başlatın

```bash
./apphub service start
```

konsol çıktısı:

```bash
➜  apphub-darwin-amd64 ./apphub service start
Starting app service:					[  OK  ]
```

## 3.APP durumunu kontrol edin

```bash
./apphub status
```

konsol çıktısı:

```bash
➜  apphub-darwin-amd64 ./app status
[gaganode]:		local version:[1.0.3] latest version:[1.0.3] status:[TO_DOWNLOAD] 
```

Durum Listesi:

```bash
TO_DOWNLOAD                     # app to download
DOWNLOADED                      # app downloaded
INSTALLED                       # app installed
RUNNING                         # app running
```

## 4.Tokeni Ayarlayın

```bash
./apps/gaganode/gaganode config set --token=`your token`
```

konsol çıktısı:

```bash
➜  apphub-darwin-amd64 ./apps/gaganode/gaganode config set --token=`your token`
new config generated
restart for the new configuration to take effect
```


## 5.APP'i Yeniden Başlatın

```bash
./apphub restart
```

konsol çıktısı:

```bash
➜  apphub-darwin-amd64 ./apphub restart
restart command send, system will reboot...
```

## Komutların Referansı

```bash
./apphub service install                         # install node
./apphub service start                           # start node
./apphub service stop                            # stop node
./apphub service remove                          # remove node
./apphub status                                  # check node running status
./apphub restart                                 # restart node
./apphub upgrade                                 # upgrade node
./apphub log                                     # check logs
./apphub -h                                      # check help
```

## Terminal Kaydı

<a href="https://asciinema.org/a/545224" target="_blank"><img src="https://asciinema.org/a/545224.svg" /></a>