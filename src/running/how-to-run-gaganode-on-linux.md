# GaGaNode Linux'ta Nasıl Çalıştırılır?

>Bir GaGaNode'u Linux'ta kolayca nasıl kurabilirim?

[[toc]]

## Dependencies Paketlerini Yükleme

Eğer `-bash: curl: command not found` gibi bu komutu kullanamayacağınızı söyleyen bildirimler alırsanız, lütfen önce `curl`, `tar`, `ca-certificates` komutlarını kullanarak yükleyin.

**Ubuntu / Debian:** 

```bash
sudo apt-get update -y && sudo apt-get -y install curl tar ca-certificates
```

**CentOS / Fedora:**

```bash
sudo yum update -y && sudo yum install -y curl tar ca-certificates
```

## 1.İndirmek & Kurmak

::: ipucu 🚧 İPUCU
Gaganode'nin eski sürümü sistemde mevcutsa kapatmak için lütfen aşağıdaki komutu kullanın.
<br>
`
sudo ./app service remove
`
:::


<CodeGroup>

  <CodeGroupItem title="Linux 64-bit">

```bash
curl -o apphub-linux-amd64.tar.gz https://assets.coreservice.io/public/package/60/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-amd64.tar.gz && rm -f apphub-linux-amd64.tar.gz && cd ./apphub-linux-amd64 && sudo ./apphub service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux 32-bit">

```bash
curl -o apphub-linux-386.tar.gz https://assets.coreservice.io/public/package/70/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-386.tar.gz && rm -f apphub-linux-386.tar.gz && cd ./apphub-linux-386 && sudo ./apphub service install
```

  </CodeGroupItem>

</CodeGroup>

konsol çıktısı:

```bash
meson@meson-server:~$ curl -o apphub-linux-amd64.tar.gz https://assets.coreservice.io/public/package/60/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-amd64.tar.gz && rm -f apphub-linux-amd64.tar.gz && cd ./apphub-linux-amd64 && sudo ./apphub service install
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 7752k  100 7752k    0     0  4171k      0  0:00:01  0:00:01 --:--:-- 4170k
[sudo] password for meson:
2022/12/13 06:52:47 [info] systemd detected
Install app service:					[  OK  ]
```


## 2.Hizmeti Başlatın

```bash
sudo ./apphub service start
```

konsol çıktısı:

```bash
meson@meson-server:~/app-linux-amd64$ sudo ./apphub service start
2022/12/13 06:52:57 [info] systemd detected
Starting app service:					[  OK  ]
```

## 3.APP Durumunu Kontrol Edin

```bash
./apphub status
```

gaganode'un durumunun ÇALIŞIYOR olup olmadığını kontrol edin 

konsol çıktısı:

```bash
meson@meson-server:~/app-linux-amd64$ ./apphub status
[gaganode]:		local version:[1.0.3] latest version:[1.0.3] status:[DOWNLOADED]
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
sudo ./apps/gaganode/gaganode config set --token=`your token`
```

konsol çıktısı:

```bash
meson@meson-server:~/app-linux-amd64$ sudo ./apps/gaganode/gaganode config set --token=albrcgctlhzgdhramuywpwje
new config generated
restart for the new configuration to take effect
```

## 5.APP'i Yeniden Başlatın

```bash
./apphub restart
```

konsol çıktısı: 

```bash
meson@meson-server:~/app-linux-amd64$ ./apphub restart
restart command send, system will reboot...
```

## Komutların Referansı

```bash
sudo ./apphub service install                    # install node
sudo ./apphub service start                      # start node
sudo ./apphub service stop                       # stop node
sudo ./apphub service remove                     # remove node
./apphub status                                  # check node running status
./apphub restart                                 # restart node
./apphub upgrade                                 # upgrade node
./apphub log                                     # check logs
./apphub -h                                      # check help
```

## Terminal Kaydı

<a href="https://asciinema.org/a/545183" target="_blank"><img src="https://asciinema.org/a/545183.svg" /></a>