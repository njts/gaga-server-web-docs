# How To Run GaGa On ARM

>GaGaNode ARM'da nasıl kolayca kurulur.

[[toc]]

## Desteklenen Unix/Linux işletim sistemleri

|OS|Website|
|:-:|:-:|
|Ubuntu|[https://ubuntu.com/download/server/arm](https://ubuntu.com/download/server/arm)|
|Debian|[https://www.debian.org/ports/arm](https://www.debian.org/ports/arm/)|
|Raspberry Pi OS|[https://www.raspberrypi.com/software](https://www.raspberrypi.com/software/)|
|Fedora|[https://arm.fedoraproject.org](https://arm.fedoraproject.org/)|
|OpenWrt|[https://openwrt.org](https://openwrt.org)|
|Armbian|[https://www.armbian.com](https://www.armbian.com)|
|DietPi|[https://dietpi.com](https://dietpi.com/)|
|Manjaro|[https://manjaro.org/download/#ARM](https://manjaro.org/download/#ARM)|
|Arch Linux|[https://archlinuxarm.org](https://archlinuxarm.org/about/downloads)|
|openSUSE|[https://get.opensuse.org](https://get.opensuse.org)|
|Asahi Linux|[https://asahilinux.org](https://asahilinux.org)|

## Kaydolun

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register-v2.png)

“[Install & Run](https://dashboard.gaganode.com/install_run)” butonuna tıklayın. Bu sayfada tokeninizi ve kurulum eğitimini bulabilirsiniz.

![](./../images/running/install_run_3.png)

## 1.İndirin & Kurun

::: ipucu 🚧 İPUCU
Gaganode'nin eski sürümü sistemde mevcutsa kapatmak için lütfen aşağıdaki komutu kullanın.
<br>
`
sudo ./app service remove
`
:::

<CodeGroup>

  <CodeGroupItem title="Linux ARM 64-bit">

```bash
curl -o apphub-linux-arm64.tar.gz https://assets.coreservice.io/public/package/61/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz&& tar -zxf apphub-linux-arm64.tar.gz && rm -f apphub-linux-arm64.tar.gz && cd ./apphub-linux-arm64 && sudo ./apphub service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux ARM 32-bit">

```bash
curl -o apphub-linux-arm32.tar.gz https://assets.coreservice.io/public/package/72/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-arm32.tar.gz && rm -f apphub-linux-arm32.tar.gz && cd ./apphub-linux-arm32 && sudo ./apphub service install
```

  </CodeGroupItem>

</CodeGroup>

`uname -m` çıktısını kontrol edin. Eğer sonuç `aarch32` ise ARM Linux kaynak kodunu `32-bit` modunda çalıştırıyorsunuz demektir ve eğer sonuç `aarch64` veya `arm64` ise kaynak kodunu `64-bit` modunda çalıştırıyorsunuz demektir. [ARM işlemcileri listesi](https://en.wikipedia.org/wiki/List_of_ARM_processors)'ni kontrol edin.

konsol çıktısı:

```bash
pi@raspberrypi:~ $ curl -o apphub-linux-arm32.tar.gz https://assets.coreservice.io/public/package/72/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz && tar -zxf apphub-linux-arm32.tar.gz && rm -f apphub-linux-arm32.tar.gz && cd ./apphub-linux-arm32 && sudo ./apphub service install                                                                           
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current 
                                 Dload  Upload   Total   Spent    Left  Speed   
100 7241k  100 7241k    0     0  4061k      0  0:00:01  0:00:01 --:--:-- 4059k  
2022/12/13 04:51:20 [info] systemd detected                                     
Install app service:                                    [  OK  ]                
```

## 2.Hizmeti Başlatın

```bash
sudo ./apphub service start
```

konsol çıktısı:

```bash
pi@raspberrypi:~/app-linux-arm64 $ sudo ./apphub service start      
2022/12/13 04:51:31 [info] systemd detected                                     
Starting app service:                                   [  OK  ]                
```

## 3.APP Durumunu Kontrol Edin

```bash
./apphub status
```

konsol çıktısı:

```bash
pi@raspberrypi:~/app-linux-arm64 $ ./apphub status                               
[gaganode]:             local version:[1.0.3] latest version:[1.0.3] status:[TO_DOWNLOAD]                                                                       
```

## 4.Tokeni Ayarlayın

```bash
sudo ./apps/gaganode/gaganode config set --token=`your token`
```

konsol çıktısı:

```bash
pi@raspberrypi:~/app-linux-arm64 $ sudo ./apps/gaganode/gaganode config set --to
ken=`your token`                                                    
new config generated                                                            
restart for the new configuration to take effect                                    
```

## 5.APP'i Yeniden Başlatın

```bash
./apphub restart
```

konsol çıktısı:

```bash
pi@raspberrypi:~/app-linux-arm64 $ ./apphub restart                            
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