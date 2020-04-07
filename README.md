# tricasterDataLink
Pošiljanje podatkov v Newtek grafike

## plan:
- 7.3. izdelava enostavnega http serverja za filanje grafike - samo za probati koncept
- 8.3. KL na VPK probam na Tricasterju narediti macro, ki pokliče moj server pa potestiram
- prihodnost, če te stvari rata narest, pomeni da se da verjetno cel projekt spelat -> narediti cel programček za filanje grafik
- kasneje v planu še ikonce ipd. da se lahko VIZRT skensla za osnovnejše oddaje

## tehnologije:
- Node JS za server del
- React za frontend
- Electron za desktop program -> če bo potreba po tem -> lahko bi vse delovalo preko browserja

## ideje:
- za remote urejanje bi lahko zakupili domeno da lahko podatke filamo iz kjerkoli

## dokumentacija:
- [newtek dokumentacija za avtomatizacijo in macroje](https://www.newtek.com/blog/tips/introduction-to-tricaster-macros-and-automation/)
... pridejo še ta pomembne stvari iz tle notri
... str 61 - HTTP
> Using a simple text editor, anyone conversant with HTML can create useful webbrowser ‘applets’ that can interoperate with NewTek systems.  Add programming knowledge (say, javascript or Python for example) and a whole world of possibilities open up.The internal web server can be addressed as in this example:
... da se pošiljati tudi file str 64
> It  is  possible  to  send  media  files  directly  to  a NewTek  live  video  mixervia  HTTPpost  commands.
... Če bi hoteli imeti kasneje kontrolo nad več stvarmi bi verjetno morali uporabiti websocket, ampak se mi zdi zaenkrat glede na to da je povezava zelo enosmerna bolj smiselno imetil samo http server.
