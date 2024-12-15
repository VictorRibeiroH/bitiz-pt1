import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações de desktop");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission();
  }
}

export default function FinalMessage() {
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const handleScan = () => {
    setScanned(true);
    if (Notification.permission === "granted") {
      new Notification("Seu presente chegou!", {
        body: "Olhe ao seu lado para encontrar sua surpresa!",
        icon: "/heart-icon.png" 
      });
    } else {
      alert("Seu presente chegou! Olhe ao seu lado para encontrar sua surpresa!");
    }
  }

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-red-100 p-6">
        <CardTitle className="text-2xl font-bold text-red-800 text-center">
          Parabéns!
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Você ganhou!
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Te amo muito! ❤️
        </p>
        <div className="flex justify-center mb-4">
          <QRCodeSVG 
            value="https://www.youtube.com/"
            size={200}
            bgColor="#FFFFFF"
            fgColor="#FF0000"
            level="L"
            includeMargin={false}
            onClick={handleScan}
          />
        </div>
        <p className="text-sm text-gray-500">
          {scanned ? "Procure seu presente!" : "Escaneie o QR Code para receber o presente!"}
        </p>
      </CardContent>
    </Card>
  )
}