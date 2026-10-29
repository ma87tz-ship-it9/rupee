import { useState } from 'react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(null); // 'en' au 'sw'
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I am the Rupee Plumbing Assistant. Please select your language to continue. / Karibu! Tafadhali chagua lugha yako kuendelea.", 
      sender: 'ai',
      showLangButtons: true 
    }
  ]);

  // Vitufe vya Maswali (Options)
  const englishOptions = [
    { label: "Where are you located?", reply: "We are located at Kariakoo, Gerezani, Mbaruku/Nyamwezi Street, Dar es Salaam. You are welcome to visit our showroom!" },
    { label: "Do you sell sinks?", reply: "Yes! We sell high-quality Sanitary Ware and Stainless Steel Sinks (including Surgical Sinks for hospitals). You can view our Products page to see more." },
    { label: "What pipes do you have?", reply: "We supply genuine PVC and PPR pipes and fittings. Let us know the sizes you need and we can guide you further." },
    { label: "How much is it? (Pricing)", reply: "For pricing and quotations, please fill out our Booking Form or message us directly on WhatsApp (+255 621 059 547). We will get back to you quickly!" },
    { label: "I need expert advice", reply: "I'm here to help! If you are building a house, you need to know the right pipes (PPR for hot water, PVC for drainage). Tell me more about your project so I can assist you better." }
  ];

  const swahiliOptions = [
    { label: "Mpo wapi?", reply: "Tupo Kariakoo, Gerezani, Mbaruku/Nyamwezi Street, Dar es Salaam. Karibu sana ofisini kwetu tukuoneshe bidhaa zetu!" },
    { label: "Je, mnauza sinki?", reply: "Ndio, tunauza sinki bora za chuma cha pua, ikiwemo zile maalum za hospitali (Surgical Sinks). Unaweza kuona bidhaa zetu kwenye ukurasa wa Products." },
    { label: "Mna mabomba gani?", reply: "Tunauza mabomba halisi ya PVC na PPR pamoja na viungio vyake. Niambie unahitaji aina gani au ukubwa gani ili nikusaidie vizuri zaidi." },
    { label: "Bei zenu zikoje?", reply: "Kwa bei na nukuu, tafadhali jaza fomu yetu ya Booking au nitumie ujumbe moja kwa moja kupitia WhatsApp (+255 621 059 547). Tutakujibu haraka iwezekanavyo!" },
    { label: "Nahitaji ushauri", reply: "Nipo hapa kukupa ushauri wa kitaalamu! Kama unajenga nyumba, unahitaji kujua mabomba sahihi (PPR kwa maji ya moto, PVC kwa maji taka). Niambie zaidi kuhusu mradi wako ili nikusaidie vizuri zaidi." }
  ];

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    const welcomeMsg = lang === 'en' 
      ? "Great! Please choose an option below or ask me anything."
      : "Safi sana! Tafadhali chagua moja ya maswali hapa chini au niulize kitu chochote.";
    setMessages([{ text: welcomeMsg, sender: 'ai' }]);
  };

  const handleOptionClick = (option) => {
    // 1. Ongeza swali la mteja (kama alichoandika)
    const userMessage = { text: option.label, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // 2. AI inajibu baada ya muda kidogo
    setTimeout(() => {
      const aiResponse = { text: option.reply, sender: 'ai' };
      setMessages((prev) => [...prev, aiResponse]);
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      
      {/* KITUFE CHA KUFUNGUA CHAT */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: 'var(--secondary-blue)', color: 'white', border: 'none', borderRadius: '50%', width: '60px', height: '60px', fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
        >
          💬
        </button>
      )}

      {/* DIRISHA LA CHAT */}
      {isOpen && (
        <div style={{ width: '340px', height: '480px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          
          {/* Kichwa cha Chat */}
          <div style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Rupee AI Assistant</span>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>✕</button>
          </div>

          {/* Ujumbe */}
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f9f9f9' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', backgroundColor: msg.sender === 'user' ? 'var(--secondary-blue)' : '#fff', color: msg.sender === 'user' ? 'white' : 'var(--text-dark)', padding: '10px 15px', borderRadius: '15px', maxWidth: '85%', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', fontSize: '14px' }}>
                  {msg.text}
                </div>
                
                {/* Vitufe vya Kuchagua Lugha */}
                {msg.showLangButtons && (
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                    <button 
                      onClick={() => handleLanguageSelect('en')} 
                      style={{ padding: '8px 15px', backgroundColor: 'var(--secondary-blue)', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '13px' }}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => handleLanguageSelect('sw')} 
                      style={{ padding: '8px 15px', backgroundColor: 'var(--secondary-blue)', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '13px' }}
                    >
                      Kiswahili
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SEHEMU YA VITUFE VYA KUCHAGUA (OPTIONS) */}
          {language && (
            <div style={{ padding: '10px', backgroundColor: '#fff', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
              
              {/* Vitufe vya Kiingereza */}
              {language === 'en' && englishOptions.map((opt, index) => (
                <button 
                  key={index} 
                  onClick={() => handleOptionClick(opt)}
                  style={{ textAlign: 'left', padding: '10px 15px', backgroundColor: '#f0f4ff', color: 'var(--primary-blue)', border: '1px solid #d0e0ff', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
                >
                  {opt.label}
                </button>
              ))}

              {/* Vitufe vya Kiswahili */}
              {language === 'sw' && swahiliOptions.map((opt, index) => (
                <button 
                  key={index} 
                  onClick={() => handleOptionClick(opt)}
                  style={{ textAlign: 'left', padding: '10px 15px', backgroundColor: '#f0f4ff', color: 'var(--primary-blue)', border: '1px solid #d0e0ff', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}
                >
                  {opt.label}
                </button>
              ))}

            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default ChatAssistant;