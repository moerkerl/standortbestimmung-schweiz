'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCSRF, addCSRFHeader } from '@/hooks/useCSRF'

const klassenOptions = [
  '1. Klasse Primar',
  '2. Klasse Primar',
  '3. Klasse Primar',
  '4. Klasse Primar',
  '5. Klasse Primar',
  '6. Klasse Primar',
  '1. Sek A',
  '1. Sek B', 
  '1. Sek C',
  '2. Sek A',
  '2. Sek B',
  '2. Sek C',
  '3. Sek A',
  '3. Sek B',
  '3. Sek C',
  '1. Klasse Gymnasium',
  '2. Klasse Gymnasium',
  '3. Klasse Gymnasium',
  '4. Klasse Gymnasium',
  '5. Klasse Gymnasium',
  '6. Klasse Gymnasium',
  'Lehre',
  'Studium',
  'Berufsschule',
  'Fachhochschule',
  'Universität'
]

const initialState = {
  schueler: '',
  alter: '',
  vorname: '',
  nachname: '',
  telefon: '',
  email: ''
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { token: csrfToken } = useCSRF()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleChangeWithAutoAdvance = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    
    // Auto-advance for class selection
    if (name === 'alter' && value && step === 2) {
      setTimeout(() => {
        setError('')
        setStep(step + 1)
      }, 300)
    }
    
  }

  const handleSelectWithAutoAdvance = (name: string, value: string) => {
    setForm({ ...form, [name]: value })
    setTimeout(() => {
      setError('')
      setStep(step + 1)
    }, 300)
  }

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setError('')
    
    // Validierung je Schritt
    if (step === 1 && !form.schueler) return setError('Bitte wählen Sie eine Option.')
    if (step === 2 && !form.alter) return setError('Bitte wählen oder geben Sie das Alter/Klasse an.')
    
    setStep(step + 1)
  }

  const handleBack = () => {
    setError('')
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validierung
    if (!form.vorname || !form.nachname || !form.telefon || !form.email) {
      setError('Bitte füllen Sie alle Felder aus.')
      return
    }

    setLoading(true)
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: addCSRFHeader({
          'Content-Type': 'application/json',
        }, csrfToken),
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }

      if (data.success) {
        // Redirect to thank you page
        router.push('/dankesseite')
      } else {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* Progress indicator */}
      {step <= 3 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[#ff6b35] font-semibold">Frage {step} von 3</div>
            <div className="text-gray-500 text-sm">{Math.round((step / 3) * 100)}% abgeschlossen</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#ff6b35] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step 1: Wer braucht Nachhilfe */}
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Wer braucht Nachhilfe?
          </h2>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {['Meine Tochter', 'Mein Sohn', 'Ich', 'Jemand anderes'].map((option, index) => (
              <button
                key={index}
                type="button"
                className={`border-2 rounded-lg px-6 py-4 text-left transition-all font-medium cursor-pointer ${
                  form.schueler === option.toLowerCase().replace(' ', '-')
                    ? 'border-[#ff6b35] bg-blue-50 text-[#cc5228]'
                    : 'border-gray-300 hover:border-blue-400 text-gray-700'
                }`}
                onClick={() => handleSelectWithAutoAdvance('schueler', option.toLowerCase().replace(' ', '-'))}
              >
                {option}
              </button>
            ))}
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-between mt-8">
            <div />
            <button 
              type="submit" 
              className="bg-[#ff6b35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold cursor-pointer"
            >
              Weiter
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Klasse */}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            In welcher Klasse ist {
              form.schueler === 'meine-tochter' ? 'Ihre Tochter' : 
              form.schueler === 'mein-sohn' ? 'Ihr Sohn' : 
              form.schueler === 'ich' ? 'Sie' : 'die Person'
            }?
          </h2>
          <select 
            name="alter" 
            value={form.alter} 
            onChange={handleChangeWithAutoAdvance}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ff6b35] focus:outline-none text-gray-700"
          >
            <option value="">Bitte wählen...</option>
            {klassenOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#ff6b35] hover:text-[#cc5228] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Zurück
            </button>
            <button 
              type="submit" 
              className="bg-[#ff6b35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold cursor-pointer"
            >
              Weiter
            </button>
          </div>
        </form>
      )}


      {/* Step 3: Kontaktdaten */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Ihre Kontaktdaten
          </h2>
          <p className="text-gray-600 mb-6">
            Damit wir Ihnen schnellstmöglich eine kostenlose Beratung anbieten können.
          </p>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Vorname *</label>
                <input 
                  name="vorname" 
                  value={form.vorname} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ff6b35] focus:outline-none text-gray-700"
                  placeholder="Ihr Vorname"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Nachname *</label>
                <input 
                  name="nachname" 
                  value={form.nachname} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ff6b35] focus:outline-none text-gray-700"
                  placeholder="Ihr Nachname"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Telefonnummer *</label>
              <input 
                name="telefon" 
                value={form.telefon} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ff6b35] focus:outline-none text-gray-700"
                placeholder="+41 79 XXX XX XX"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">E-Mail *</label>
              <input 
                name="email" 
                value={form.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ff6b35] focus:outline-none text-gray-700"
                placeholder="ihre@email.ch"
                type="email"
                required
              />
            </div>
          </div>

          {error && <div className="text-red-500 mt-4">{error}</div>}
          
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#ff6b35] hover:text-[#cc5228] font-medium cursor-pointer"
              onClick={handleBack}
              disabled={loading}
            >
              ← Zurück
            </button>
            <button 
              type="submit" 
              className="bg-[#ff6b35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold disabled:opacity-50 cursor-pointer"
              disabled={loading}
            >
              {loading ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}