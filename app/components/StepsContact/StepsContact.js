"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function StepsContact() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: [],
    message: "",
    investimento: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      goal: checked
        ? [...prevData.goal, value]
        : prevData.goal.filter((item) => item !== value),
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dati inviati", formData);
    const res = await fetch("/api/progetto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success(`Hey ${formData.name} your message was sent successfully`);
      nextStep(); // Vai allo step 6
    } else {
      alert("Invio fallito.");
    }
  };

  const isNextButtonDisabled = () => {
    switch (step) {
      case 0:
        return false;
      case 1:
        return !formData.name;
      case 2:
        return !formData.email || !isEmailValid;
      case 3:
        return formData.goal.length === 0;
      case 4:
        return !formData.message;
      case 5:
        return !formData.investimento;

      default:
        return false;
    }
  };
  return (
    <>
      <div className="flex justify-center w-[90%] mx-auto pb-10 lg:pb-32">
        <div className="w-full lg:w-[500px] bg-primary/20 rounded-full h-2.5 mb-4">
          <div
            className="progress-bar"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        {step === 0 && (
          <div className="flex flex-col max-w-2xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h1 className="mb-4 text-3xl lg:text-5xl text-primary">
              <span className="font-bold">
                &quot;Parliamo del tuo progetto&quot;
              </span>{" "}
              <br />{" "}
              <span className="font-regular">30 minuti di call gratuita</span>
            </h1>
            <p className="mb-6 text-lg text-pink">
              Compila il form ed ottieni subito la tua SESSIONE GRATUITA.
              <br />
              Perfetto per freelance, piccole aziende, start up e artigiani che
              vogliono migliorare la propria presenza online scegliendo un
              design personalizzato e strategico.
            </p>
            <button
              onClick={nextStep}
              className="max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary"
            >
              Inizia subito
              <Icon
                icon="guidance:left-arrow"
                className="text-[1.5rem] text-white"
              />
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col max-w-2xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-4xl text-primary">
              Perfetto! Ci vorrà solo un minuto per comprendere meglio la tua
              situazione.
            </h2>
            <p className="mb-6 text-lg text-pink">
              Cominciamo con il tuo nome: come ti chiami?
            </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 !bg-transparent border-b focus:outline-none focus:border-primary dark:focus:border-white  text-main"
              placeholder="Inserisci il tuo nome*"
              required
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second "
              >
                Indietro
              </button>
              <button
                onClick={nextStep}
                className={`max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col max-w-2xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-4xl text-pink">
              Ciao {formData.name}, puoi dirci qual è la tua email?
            </h2>
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="w-full py-2 !bg-transparent border-b focus:outline-none focus:border-primary dark:focus:border-white  text-main"
              name="email"
              placeholder="Inserisci la tua email*"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {!isEmailValid && (
              <p className="text-second">
                Per favore inserisci una email valida.
              </p>
            )}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second "
              >
                Indietro
              </button>
              <button
                onClick={nextStep}
                className={`max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="max-w-lg text-lg font-medium lg:text-2xl text-pink">
              Grazie {formData.name}! <br /> Per capire come possiamo
              supportarti al meglio, ho ancora qualche domanda...
            </h2>
            <h3 className="text-2xl font-bold lg:text-4xl text-pink">
              Quali sono i tuoi obiettivi?
            </h3>
            <div className="flex my-5 lg:justify-center">
              <div className="flex flex-wrap gap-2 lg:justify-center lg:gap-4">
                {[
                  {
                    id: "goal-1",
                    value: "ecommerce",
                    label: "🚀 Lanciare un nuovo e-commerce",
                  },
                  {
                    id: "goal-2",
                    value: "ridisegnare-ecommerce",
                    label: "💪 Ridisegnare un e-commerce",
                  },
                  {
                    id: "goal-3",
                    value: "nuovo-sito-web",
                    label: "😃 Lanciare un nuovo Sito Web",
                  },
                  {
                    id: "goal-4",
                    value: "nuovo-sito-web",
                    label: "✏️ Definire una Brand Identity",
                  },
                  {
                    id: "goal-5",
                    value: "nuovo-sito-web",
                    label: "🥫 Ideare una Linea di Prodotti",
                  },
                  {
                    id: "goal-6",
                    value: "nuovo-sito-web",
                    label: "🎨 Creare delle Grafiche/Illustrazioni ad hoc",
                  },
                  {
                    id: "goal-7",
                    value: "nuovo-sito-web",
                    label: "🪄 Fare un restyling della Brand Identity",
                  },

                  {
                    id: "goal-8",
                    value: "ridisegnare-sito-web",
                    label: "🛠 Ridisegnare un Sito Web esistente",
                  },
                ].map((goal) => (
                  <label
                    key={goal.id}
                    htmlFor={goal.id}
                    className={`cursor-pointer goal-label text-pink flex items-center justify-center py-2 px-4 border ${
                      formData.goal.includes(goal.value)
                        ? "border-second"
                        : "border-pink"
                    } rounded-full hover:border-second `}
                  >
                    <input
                      type="checkbox"
                      name="goal"
                      id={goal.id}
                      value={goal.value}
                      checked={formData.goal.includes(goal.value)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <p
                      className={
                        formData.goal.includes(goal.value)
                          ? "text-second"
                          : "text-black"
                      }
                    >
                      {goal.label}
                    </p>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                Indietro
              </button>
              <button
                onClick={nextStep}
                className={`max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="max-w-2xl text-2xl font-bold lg:text-4xl text-pink">
              {formData.name}, quali sono le difficoltà principali <br />
              che stai incontrando?
            </h2>
            <h3 className="text-lg font-medium lg:text-2xl text-pink">
              Conoscere questi dettagli è fondamentale per capire <br />
              come posso aiutarti a raggiungere i tuoi obiettivi.
            </h3>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full contact-form__input text-l text-m_sm contact-form__input_pinched contact-form__input_pinched_t text-pink"
              placeholder="Sentiti liber@ di dirci qualsiasi cosa*"
              required
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                Indietro
              </button>
              <button
                onClick={nextStep}
                className={`max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-4xl text-pink">
              Ultima domanda
            </h2>
            <p className="mb-6 text-lg text-pink">
              Se dovessi iniziare domani, quale budget saresti disposto <br />{" "}
              ad impegnare per il tuo progetto?
            </p>
            <select
              name="investimento"
              id="investimento"
              className="w-full p-3 text-pink bg-pink/40 contact-select fs-7"
              value={formData.investimento}
              onChange={(e) =>
                setFormData({ ...formData, investimento: e.target.value })
              }
              required
            >
              {[
                {
                  value: "",
                  label: "Seleziona un'opzione",
                },
                {
                  value: "Meno di 1.500",
                  label: "Meno di 1.500",
                },
                {
                  value: "Tra i 3.000 ed i 5.000",
                  label: "Tra i 3.000 ed i 5.000",
                },
                {
                  value: "5.000+",
                  label: "5.000+",
                },
              ].map((op, i) => {
                return (
                  <option value={op.value} disabled={op.isDisabled} key={i}>
                    {op.label}
                  </option>
                );
              })}
            </select>
            <fieldset className="_form-fieldset">
              <div className="_row d-none">
                <legend for="field[9][]" class="_form-label hidden">
                  Privacy Policy
                </legend>
              </div>
              <input
                data-autofill="false"
                type="hidden"
                id="field[9][]"
                name="field[9][]"
                value="~|"
                data-name="privacy"
              />
              <div class="flex items-center gap-1">
                <input
                  id="field_9Ho letto e accetto la Privacy Policy"
                  type="checkbox"
                  name="field[9][]"
                  value="Ho letto e accetto la Privacy Policy"
                  className="border border-third rounded-md !bg-transparent"
                  data-name="privacy"
                />
                <span className="ms-1 text-pink">
                  <label for="field_9Ho letto e accetto la Privacy Policy">
                    Ho letto e accetto la{" "}
                    {/* <Link
                      href="/privacy"
                      target="_blank"
                      className="underline decoration-second decoration-2 text-second"
                    > */}
                    Privacy Policy
                    {/* </Link> */}
                  </label>
                </span>
              </div>
            </fieldset>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                Indietro
              </button>
              <button
                onClick={handleSubmit}
                className={`max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary ${
                  formData.investimento ? "opacity-100" : "opacity-40"
                }`}
                disabled={!formData.investimento}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
              {/* <button
                onClick={handleSubmit}
                className={`button-main ${
                  formData.investimento ? "opacity-100" : "opacity-40"
                }`}
                disabled={!formData.investimento}
              >
                <div className="button-circ-wrap">
                  <div className="button-content">
                    <div
                      className="button-circ-bg"
                      style={{
                        height: "42px",
                        width: "2.625rem",
                      }}
                    >
                      <Icon
                        icon="guidance:left-arrow"
                        className="text-[1.5rem] text-first"
                      />
                    </div>
                    <span className="px-2">Avanti</span>
                  </div>
                </div>
              </button> */}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-5xl text-pink">
              Woo-ooh! 🎉
            </h2>

            <p className="mb-5 text-lg text-pink">
              La tua richiesta è stata inviata con successo e riceverai presto
              una mail di conferma. <br /> <br /> Entro <strong>72 ore</strong>{" "}
              ti risponderemo per pianificare la tua{" "}
              <strong>CALL GRATUITA da 30 minuti</strong> e capire insieme{" "}
              <br className="d-none d-sm-block" /> cosa possiamo fare per te.
            </p>
            <div className="flex justify-between">
              <Link
                href="/"
                title="Contattami per una consulenza e parliamo insieme del tuo progetto"
                className="max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary"
              >
                Torna alla Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
