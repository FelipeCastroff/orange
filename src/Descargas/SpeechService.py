import azure.cognitiveservices.speech as speechsdk
from tkinter import *
import webbrowser

# Se crea una instacia de configuración junto con la clave subcripción y la región de servicio
# Reemplaza en "YourSubscriptionKey" por tu clave de subcripcción y "YourServiceRegion" por tu region de servicio.
# Un ejemplo de region de servicio es westus.

speech_key, service_region = "YourSubscriptionKey", "YourServiceRegion"
speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=service_region)

# Creates a recognizer with the given settings

speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config)
speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config)
#Mostrará por consola 
print("Say something...")

#############################
# Empieza speech recognition, y retorna despues de una sola iteración. Una solo iteración es 
# determina por un silencio al final de la iteración o despues de un maximo de 15 segundos, 
# luego el audio es procesado. La tarea devuelve el texto de reconocimiento como resultado. 
# Este comando start_continuous_recognition() reconoce multiples expresiones}
# Este comando recognize_once retorna el valor de un solo enunciado hasta determinar un silencio.

# Checks result.

def clickedInputV():
    result = speech_recognizer.recognize_once()
    if result.reason == speechsdk.ResultReason.RecognizedSpeech:
        print(format(result.text))
        res = format(result.text)
        lbl.configure(text=res)
        if format(result.text) == "Killer Queen.":
            print("Oh no")
            webbrowser.open("https://www.youtube.com/watch?v=SdXeoBZDJJQ&list=RDSdXeoBZDJJQ&start_radio=1", new=2, autoraise=True)
        if format(result.text) == 'Open Facebook.':
            webbrowser.open('https://www.facebook.com', new=2, autoraise=True)
    elif result.reason == speechsdk.ResultReason.NoMatch:
        print("No speech could be recognized: {}".format(result.no_match_details))
    elif result.reason == speechsdk.ResultReason.Canceled:
        cancellation_details = result.cancellation_details
        print("Speech Recognition canceled: {}".format(cancellation_details.reason))
        if cancellation_details.reason == speechsdk.CancellationReason.Error:
            print("Error details: {}".format(cancellation_details.error_details))

# Primero se configura speech_synthesier con la clave de activación y una región del servicio. 
# El texto ingresado en el cuadro de texto, este se guardará para luego ser procesado por el
# servicio speech_syntesizer el cual retornará el texto ingresado mediante un audio .

def clickedInputT():
    resultado = speech_synthesizer.speak_text_async(Text.get()).get()
    if resultado.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        print("Speech synthesized to speaker for text [{}]".format(Text))
    elif resultado.reason == speechsdk.ResultReason.Canceled:
        cancellation_details = resultado.cancellation_details
        print("Speech synthesis canceled: {}".format(cancellation_details.reason))
        if cancellation_details.reason == speechsdk.CancellationReason.Error:
            if cancellation_details.error_details:
                print("Error details: {}".format(cancellation_details.error_details))
        print("Did you update the subscription info?")

#Se genera la interfaz mediante Tkinter#

window = Tk()
window.title("Orange-Heist")
window.geometry('130x250')
lbl = Label(window, text="Seleccione:", font=('Arial', 12), justify='center')
lbl.grid(column=0, row=0)
lbl = Label(window, text='Usted dijo:', font=('Arial', 12))
lbl.grid(column=0, row=3)
lbl = Label(window, text='', font=('Arial', 12) )
lbl.grid(column=0, row=4)
Text = Entry(window, width=20)
Text.grid(column=0, row=6)

#Se crea el Boton el cual gatillará el proceso. 
#El usuario debe hablar fuerte, claro y de manera estandar para que puede reconocer las palabas con facilidad

InputV = Button(window, text='¡Hablame!', command = clickedInputV, font=('Arial', 10))
InputV.grid(column=0, row=2)

InputT = Button(window, text='¡Escuchate!', command = clickedInputT, font=('Arial', 10))
InputT.grid(column=0, row=5)



window.mainloop()