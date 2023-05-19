# GaGaNode Windows'ta Nasıl Çalıştırılır?

>Windows'ta GaGaNode nasıl kolayca kurulur.

[[toc]]

## Kaydolun

[https://dashboard.gaganode.com/register](https://dashboard.gaganode.com/register)

![](./../images/running/register-v2.png)

“[Install & Run](https://dashboard.gaganode.com/install_run)” butonuna tıklayın. Bu sayfada tokeninizi ve kurulum eğitimini bulabilirsiniz.

![](./../images/running/install_run_3.png)

## Windows'ta PowerShell'i açın

### PowerShell'i açmak için "Run" penceresini kullanın

Windows PowerShell'i Run'dan yönetici ayrıcalıklarıyla açabilirsiniz. Bu pencereyi başlatmanın hızlı bir yolu klavyedeki `Win` + `R` tuşlarına basmaktır. Ardından `powershell` yazın ve Enter tuşuna basın ya da Tamam'a tıklayın.

<div align="center">
<img src="./images/../../images/running/windows-03.png" alt="Windows PowerShell will open in admin mode" />
</div>

PowerShell'den PowerShell Admin'e geçiş yapın. Zaten PowerShell'de çalışıyorsanız ancak `yönetici` moduna geçmeniz gerekiyorsa, bunu PowerShell'i kapatmadan yapabilirsiniz. Sadece bu komutu çalıştırın:

```bash
start-process powershell -verb runas
```

<div align="center">
<img src="./images/../../images/running/windows-04.png" alt="A new instance of PowerShell will open with admin privileges" />
</div>

### PowerShell'i başlatmak için WinX Power User Menüsünü kullanmak

Windows PowerShell'i Windows Power User menüsünden yönetici olarak da başlatabilirsiniz. Power User menüsüne erişmek için masaüstünün sol alt köşesindeki Başlat menüsüne (Windows simgesi) sağ tıklayın. Power User menüsü görünecektir. Burada, `Windows Terminal (Yönetici)` &  `Windows PowerShell (Yönetici)` öğelerine tıklayın.

<div align="center">
<img src="./images/../../images/running/windows-01.png" height="400" alt="" />
</div>

## 1.İndirmek & Yüklemek

<CodeGroup>

  <CodeGroupItem title="Windows 64-bit">

```bash
wget -Uri "https://assets.coreservice.io/public/package/59/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz" -OutFile "apphub-windows-amd64.tar.gz" ; tar -zxf apphub-windows-amd64.tar.gz ; rm -Force apphub-windows-amd64.tar.gz ; cd ./apphub-windows-amd64 ; ./apphub.exe service install
```

  </CodeGroupItem>

  <CodeGroupItem title="Windows 32-bit">

```bash
wget -Uri "https://assets.coreservice.io/public/package/59/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz" -OutFile "apphub-windows-amd64.tar.gz" ; tar -zxf apphub-windows-amd64.tar.gz ; rm -Force apphub-windows-amd64.tar.gz ; cd ./apphub-windows-amd64 ; ./apphub.exe service install
```

  </CodeGroupItem>

</CodeGroup>

konsol çıktısı:

```bash
PS C:\Users\Administrator> wget -Uri "https://assets.coreservice.io/public/package/59/app-market-gaga-pro/1.0.4/app-market-gaga-pro-1_0_4.tar.gz" -OutFile "apphub-windows-amd64.tar.gz" ; tar -zxf apphub-windows-amd64.tar.gz ; rm -Force apphub-windows-amd64.tar.gz ; cd ./apphub-windows-amd64 ; ./apphub.exe service install
```

## 2.Hizmeti Başlatın

```bash
./apphub.exe service start
```

konsol çıktısı: 

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apphub.exe service start
Starting app service: completed.
```


## 3.APP Durumunu Kontrol Edin

```bash
./apphub.exe status
```

gaganode'un durumunun ÇALIŞIYOR olup olmadığını kontrol edin

Durum Listesi:

```bash
TO_DOWNLOAD                     # app to download
DOWNLOADED                      # app downloaded
INSTALLED                       # app installed
RUNNING                         # app running
```

konsol çıktısı: 

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apphub.exe status
[gaganode]:             local version:[1.0.3] latest version:[1.0.3] status:[TO_DOWNLOAD]
```

## 4.Tokeni Ayarlayın

```bash
./apps/gaganode/gaganode.exe config set --token=`your token`
```

konsol çıktısı:

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apps/gaganode/gaganode.exe config set --token=rhhectvdiitzmvqhbulqiljo
new config generated
restart for the new configuration to take effect
```

## 5.APP'i Yeniden Başlatın

```bash
./apphub.exe restart
```

konsol çıktısı: 

```bash
PS C:\Users\Administrator\app-windows-amd64> ./apphub.exe restart
restart command send, system will reboot...
```



![](./images/../../images/running/windows-02.png)

1-3 dakika sonra, yeni node'da açılan terminallerde yeni bir terminal kaydınız olacaktır.

![](./images/../../images/running/windows-07.png)

## Komutların Referansı

```bash
./apphub.exe service install                    # install node
./apphub.exe service start                      # start node
./apphub.exe service stop                       # stop node
./apphub.exe service remove                     # remove node
./apphub.exe status                             # check node running status
./apphub.exe restart                            # restart node
./apphub.exe upgrade                            # upgrade node
./apphub.exe log                                # check logs
./apphub.exe -h                                 # check help
```