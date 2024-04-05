#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ThingSpeak.h>
#include "DHT.h"

const char* ssid = "realme_C55"; // WiFi network SSID
const char* password = "saffi786";  // Network Password

// #define ldr_pin A0
#define mq4_pin A0
#define Methane_led D2 
#define Temp_led D3     

#define dht_pin D1   
#define DTYPE DHT11

DHT dht(dht_pin, DTYPE);

unsigned long myChannelNumber = 2449450; // ThingSpeak Channel Number
const char* myWriteAPIKey = "BZ4VKJDPZUNSPBI6"; // ThingSpeak Write API key

WiFiClient client;

// int intensity;
float gas;
int temperature;
int humidity;

void setup() {
  // put your setup code here, to run once:
  WiFi.mode(WIFI_STA);

  Serial.begin(9600);
  dht.begin();
  pinMode(Methane_led, OUTPUT);
  pinMode(Temp_led, OUTPUT);
  delay(100);
  WiFi.begin(ssid, password);

  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(".");
  // Connect to WiFi Network
  ThingSpeak.begin(client);
}

void loop() {
  // put your main code here, to run repeatedly:

  // intensity = analogRead(ldr_pin);
  gas = analogRead(mq4_pin) - 400;
  temperature = dht.readTemperature();
  humidity = dht.readHumidity();


  // Serial.print("Light Intensity - ");
  // Serial.print(intensity);
  // Serial.println(" lm");
  Serial.print("Methane - ");
  Serial.print(gas);
  Serial.println(" ppm");
  Serial.print("Temperature - ");
  Serial.print(temperature);
  Serial.println(" °C");
  Serial.print("Humidity - ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.println();

  if(gas > 200) {
    Serial.println("Food is rotten");
    digitalWrite(Methane_led, HIGH);
  }
  else {
    Serial.println("Food is not rotten");
    digitalWrite(Methane_led, LOW);
  }

  if(temperature > 25 || humidity > 60) {
    Serial.println("Turn on the cooler");
    digitalWrite(Temp_led, HIGH);
  }
  else {
    digitalWrite(Temp_led, LOW);
  }

  ThingSpeak.writeField(myChannelNumber, 1, temperature, myWriteAPIKey); // Update in ThingSpeak
  ThingSpeak.writeField(myChannelNumber, 2, humidity, myWriteAPIKey); // Update in ThingSpeak
  ThingSpeak.writeField(myChannelNumber, 3, gas, myWriteAPIKey); // Update in ThingSpeak
  // ThingSpeak.writeField(myChannelNumber, 4, intensity, myWriteAPIKey); // Update in ThingSpeak
  delay(500);
}
