# GaGaNode Raspberry Pi'da Nasıl Çalıştırılır?

>GaGaNode Raspberry Pi'a nasıl kolayca kurulur.

[[toc]]

## Dağıtım Gereksinimleri

- Herhangi bir [Raspberry Pi Ürünü](https://www.raspberrypi.com/products/), Raspberry Pi 1 - 2, Raspberry Pi Zero 1 - 2 dahil.
- Boşta kalan ev geniş bantı

## Raspberry Pi'ın Kurulumu

GaGaNode çok az yer kaplar, Raspberry Pi üzerinde önceden çalışan uygulamaları etkilemez ve doğrudan kurulabilir.

Raspberry Pi yepyeni ise, Raspberry Pi OS'i yüklemek için [Raspberry Pi Imager](https://www.raspberrypi.com/software/)'ı kullanabilirsiniz.

![](./../images/running/raspberry-pi-01.png)

Raspberry Pi Imager, Raspberry Pi OS'i bir microSD karta yüklemenin hızlı ve kolay bir yoludur. Raspberry Pi Imager kullanarak bir işletim sisteminin nasıl kurulacağını öğrenmek için [45 saniyelik video](https://www.youtube.com/watch?v=ntaXWS8Lk34)'yu izleyin.

## Kaydolun

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register-v2.png)

“[Install & Run](https://dashboard.gaganode.com/install_run)” butonuna tıklayın. Bu sayfada tokeninizi ve kurulum eğitimini bulabilirsiniz.

![](./../images/running/install_run_3.png)

## 1.İndirmek & Kurmak

::: ipucu 🚧 İPUCU
Gaganode'un eski sürümü sistemde mevcutsa kapatmak için lütfen aşağıdaki komutu kullanın.
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

## 2.Hizmeti Başlatın

```bash
sudo ./apphub service start
```

## 3.APP Durumunu Kontrol Edin

```bash
./apphub status
```

## 4.Tokeni Ayarlayın

```bash
sudo ./apps/gaganode/gaganode config set --token=`your token`
```

## 5.APP'i Yeniden Başlatın

```bash
./apphub restart
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

<a href="https://asciinema.org/a/545172" target="_blank"><img src="https://asciinema.org/a/545172.svg" /></a>