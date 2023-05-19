# Android SDK 101

>GaGaNode Android SDK Entegrasyon Kılavuzu

- Bu belge SDK entegrasyonunun basit bir örneğidir.
- Resmi stabil çalışan uygulama referansı için lütfen [GaGaNode Android](https://github.com/gaganode/gaga_android)'e bakın.

## 1. En son sürüm .jar SDK'yi indirmek için GitHub'a gidin

`.jar` SDK: [gaga_android_sdk](https://github.com/gaganode/gaga_android_sdk)

```sh
git clone https://github.com/gaganode/gaga_android_sdk.git
```

## 2. SDK.jar dosyasını libs klasörünüze ekleyin ve Add As Library(Kütüphane olarak ekle) butonuna basın.

![](./../images/sdk/android-sdk.jpeg)

## 3. SDK.jar dosyasını libs klasörünüze ekleyin ve Add As Library(Kütüphane olarak ekle) butonuna basın.

```java
<uses-permission android:name="android.permission.INTERNET" >
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## 4. Aktivitenizde SDK'yi başlatın

```java
String token= "{your token}";
SharedPreferences miner_sdk_sp= getSharedPreferences("miner_sdk",MODE_PRIVATE);
long node_id=miner_sdk_sp.getLong("node_id", Math.abs(new Random().nextLong()));
miner_sdk_sp.edit().putLong(“node_id",node_id).apply();

MinerSdk.Init(token,node_id);
MinerSdk.Start();
```