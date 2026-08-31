import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ShieldCheck, CreditCard, Sparkles, Download, Heart, Smile } from 'lucide-react';
import { Product } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    vv: ''
  });
  const [copiedPix, setCopiedPix] = useState(false);
  const [pixCountdown, setPixCountdown] = useState(300); // 5 minutes
  const [isProcessing, setIsProcessing] = useState(false);

  const finalProduct: Product = product || {
    id: 'digital',
    name: 'Livrinho Digital (PDF)',
    badge: 'Mais Econômico',
    price: 5.90,
    originalPrice: 19.90,
    description: 'Versão em PDF de alta qualidade para ler no celular ou imprimir.',
    features: [],
    ctaText: 'Comprar Agora'
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'payment' && paymentMethod === 'pix' && pixCountdown > 0) {
      timer = setInterval(() => {
        setPixCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [step, paymentMethod, pixCountdown]);

  if (!isOpen) return null;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep('payment');
    }
  };

  const handleCopyPix = () => {
    const pixCode = `00020101021226830014br.gov.bcb.pix2561api.pix.catequese.com/v2/cob/95818f64c5194f4a974bca22${finalProduct.price === 5.9 ? '590' : finalProduct.price === 17.00 ? '1700' : finalProduct.price === 19.90 ? '1990' : '2700'}5204000053039865404${finalProduct.price.toFixed(2)}5802BR5915EditoraSemente6009SaoPaulo62070503ore`;
    navigator.clipboard.writeText(pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-sky-pastel-900/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4 backdrop-blur-xs font-sans">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border-t-4 border-sky-pastel-450">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-pastel-500 to-sky-pastel-600 text-white px-5 py-4 flex items-center justify-between relative">
          <div>
            <span className="text-[9px] text-sky-pastel-100 font-bold uppercase tracking-widest block font-heading">
              Iniciação Cristã Segura
            </span>
            <h4 className="text-sm font-bold font-heading text-white">
              {step === 'success' ? 'Sua compra foi confirmada! 🎉' : `Pagamento: ${finalProduct.name}`}
            </h4>
          </div>
          <button 
            type="button" 
            onClick={() => onClose()}
            className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Steps */}
        {step !== 'success' && (
          <div className="bg-sky-pastel-50/50 px-5 py-2.5 flex justify-between items-center text-[10px] text-stone-500 border-b border-sky-pastel-100">
            <span className={`font-semibold ${step === 'info' ? 'text-sky-pastel-750 font-bold text-sky-pastel-800' : 'text-stone-400'}`}>
              1. Meus Dados
            </span>
            <span className="text-stone-300">➔</span>
            <span className={`font-semibold ${step === 'payment' ? 'text-sky-pastel-750 font-bold text-sky-pastel-800' : 'text-stone-400'}`}>
              2. Pagamento (R$ {finalProduct.price.toFixed(2).replace('.', ',')})
            </span>
            <span className="text-stone-300">➔</span>
            <span className="text-stone-400">
              3. Receber no E-mail
            </span>
          </div>
        )}

        {/* Scrollable Container Form */}
        <div className="p-5 overflow-y-auto flex-1">
          
          {/* Phase 1: Client Info Form */}
          {step === 'info' && (
            <form onSubmit={handleInfoSubmit} className="space-y-4">
              <div className="bg-sky-pastel-50 text-sky-pastel-800 text-[11px] p-3 rounded-2xl border border-sky-pastel-100 flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-300 flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="font-sans">O livrinho em PDF de alta resolução será entregue no seu e-mail e WhatsApp imediatamente após a confirmação do pagamento.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1 font-heading" htmlFor="client-name">
                  Nome da Mãe / Pai / Catequista
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs bg-stone-50 border border-sky-pastel-100 rounded-xl px-3.5 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-pastel-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1 font-heading" htmlFor="client-email">
                  Seu E-mail Principal (Muito Importante)
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  placeholder="EX: maria@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs bg-stone-50 border border-sky-pastel-100 rounded-xl px-3.5 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-pastel-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1 font-heading" htmlFor="client-phone">
                  WhatsApp (Para suporte e entrega)
                </label>
                <input
                  id="client-phone"
                  type="tel"
                  placeholder="Ex: (11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs bg-stone-50 border border-sky-pastel-100 rounded-xl px-3.5 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-pastel-300"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-pastel-500 to-sky-pastel-600 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition hover:from-sky-pastel-650 active:scale-98 flex items-center justify-center gap-1 font-heading uppercase"
                >
                  Ir para o Pagamento ➔
                </button>
              </div>

              <p className="text-[9.5px] text-center text-stone-400">
                🔒 Seus dados estão 100% seguros sob nossa política de privacidade.
              </p>
            </form>
          )}

          {/* Phase 2: Payment Selector */}
          {step === 'payment' && (
            <div className="space-y-4 font-sans">
              
              <div className="grid grid-cols-2 gap-2 bg-stone-100/70 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2 text-[11px] font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${paymentMethod === 'pix' ? 'bg-white text-emerald-600 shadow-2xs' : 'text-stone-500 hover:text-stone-800'}`}
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Pagar via PIX
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 text-[11px] font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${paymentMethod === 'card' ? 'bg-white text-sky-pastel-600 shadow-2xs' : 'text-stone-500 hover:text-stone-800'}`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  Cartão de Crédito
                </button>
              </div>

              {/* QR / PIX Payment Section */}
              {paymentMethod === 'pix' && (
                <div className="space-y-3">
                  <div className="bg-sky-pastel-50/50 rounded-2xl p-4 border border-sky-pastel-100 flex flex-col items-center text-center">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider bg-white py-0.5 px-2 rounded-full border border-emerald-100">
                      Código PIX Copia e Cola Gerado
                    </span>

                    {/* QR Code Placeholder with pretty layout */}
                    <div className="w-32 h-32 bg-white border border-stone-100 rounded-xl p-2 my-3 relative flex items-center justify-center shadow-inner">
                      <div className="grid grid-cols-4 gap-1 opacity-90">
                        <div className="w-5 h-5 bg-sky-pastel-900 rounded"></div>
                        <div className="w-5 h-5 bg-sky-pastel-450 rounded"></div>
                        <div className="w-5 h-5 bg-stone-700 rounded"></div>
                        <div className="w-5 h-5 bg-sky-pastel-900 rounded"></div>
                        <div className="w-5 h-5 bg-stone-700 rounded"></div>
                        <div className="w-5 h-5 bg-stone-100 rounded"></div>
                        <div className="w-5 h-5 bg-sky-pastel-200 rounded"></div>
                        <div className="w-5 h-5 bg-stone-700 rounded"></div>
                        <div className="w-5 h-5 bg-sky-pastel-400 rounded"></div>
                        <div className="w-5 h-5 bg-stone-700 rounded"></div>
                        <div className="w-5 h-5 bg-white rounded"></div>
                        <div className="w-5 h-5 bg-sky-pastel-900 rounded"></div>
                      </div>
                      <div className="absolute inset-0 m-auto w-8 h-8 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-600">PIX</span>
                      </div>
                    </div>

                    <p className="text-[10.5px] text-stone-500 max-w-xs leading-snug">
                      Escaneie o QR Code com o aplicativo do seu banco ou copie a chave PIX abaixo.
                    </p>

                    <div className="w-full mt-2">
                      <button
                        type="button"
                        onClick={() => handleCopyPix()}
                        className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition active:scale-95"
                      >
                        {copiedPix ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" /> Código Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-sky-pastel-300" /> Copiar Código PIX
                          </>
                        )}
                      </button>
                    </div>

                    {/* Countdown */}
                    <p className="text-[9.5px] text-gray-400 mt-1.5 font-mono">
                      O código expira em: <span className="text-pink-500 font-bold">{formatTime(pixCountdown)}</span>
                    </p>
                  </div>

                  <div className="bg-sky-pastel-100 p-3 rounded-xl text-center">
                    <p className="text-[10.5px] text-sky-pastel-900 font-semibold mb-2">
                      Já realizou o pagamento? Clique no botão para liberar o PDF:
                    </p>
                    <button
                      type="button"
                      onClick={() => processPayment()}
                      disabled={isProcessing}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 rounded-lg transition flex items-center justify-center gap-1"
                    >
                      {isProcessing ? (
                        <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      ) : (
                        'Confirmar Pagamento Simulado e Baixar ✔'
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Credit Card Payment Section */}
              {paymentMethod === 'card' && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[9.5px] font-bold text-stone-500 uppercase tracking-wider mb-0.5">
                        Número do Cartão de Crédito
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        value={cardData.number}
                        onChange={(e) => setCardData({ ...cardData, number: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                        className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-sky-pastel-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[9.5px] font-bold text-stone-500 uppercase tracking-wider mb-0.5">
                        Nome Impresso no Cartão
                      </label>
                      <input
                        type="text"
                        placeholder="EX: MARIA S NUNES"
                        value={cardData.name}
                        onChange={(e) => setCardData({ ...cardData, name: e.target.value.toUpperCase() })}
                        className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-sky-pastel-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[9.5px] font-bold text-stone-500 uppercase tracking-wider mb-0.5">
                          Validade (MM/AA)
                        </label>
                        <input
                          type="text"
                          placeholder="09/31"
                          maxLength={5}
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-sky-pastel-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[9.5px] font-bold text-stone-500 uppercase tracking-wider mb-0.5">
                          Código de Segurança (CVV)
                        </label>
                        <input
                          type="password"
                          placeholder="***"
                          maxLength={4}
                          value={cardData.vv}
                          onChange={(e) => setCardData({ ...cardData, vv: e.target.value })}
                          className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-sky-pastel-400"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => processPayment()}
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-sky-pastel-500 to-sky-pastel-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs hover:from-sky-pastel-655 active:scale-98 transition flex items-center justify-center gap-1"
                  >
                    {isProcessing ? (
                      <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    ) : (
                      `Pagar R$ ${finalProduct.price.toFixed(2).replace('.', ',')} Simulado`
                    )}
                  </button>
                </div>
              )}

              {/* Developer notice on hooking external checkouts */}
              <div className="bg-sky-pastel-50 p-2.5 rounded-xl border border-sky-pastel-200">
                <p className="text-[10px] text-sky-pastel-800 leading-normal">
                  💡 <strong>Nota do Editor:</strong> Para integrar seu checkout oficial (como Hotmart, Mercado Pago, etc.), conecte os links diretamente nos botões da página de vendas.
                </p>
              </div>
            </div>
          )}

          {/* Phase 3: Simulated Download */}
          {step === 'success' && (
            <div className="space-y-4 text-center py-4 font-sans">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h5 className="text-sm font-bold text-sky-pastel-900 font-heading">
                O Livrinho foi enviado para o seu E-mail!
              </h5>

              <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                Parabéns, <strong>{formData.name || 'Mãe / Catequista'}</strong>! O pagamento de <strong>R$ {finalProduct.price.toFixed(2).replace('.', ',')}</strong> foi recebido com sucesso.
              </p>

              <div className="bg-sky-pastel-50 rounded-2xl p-4 border border-sky-pastel-200 space-y-3">
                <p className="text-[11.5px] text-sky-pastel-900 font-medium font-sans">
                  ⭐ Seu livrinho oficial em formato PDF e todos os bônus contratados já foram integrados com segurança e enviados para: <strong>{formData.email}</strong>.
                </p>

                <div className="pt-1.5">
                  <a
                    href="https://picsum.photos/seed/childprayerbook/1200/1600"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-sky-pastel-500 hover:bg-sky-pastel-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition shadow-xs"
                  >
                    <Download className="w-4 h-4" /> Baixar PDF de Amostra Agora
                  </a>
                </div>
              </div>

              <div className="bg-pink-50 text-pink-900 border border-pink-100 rounded-2xl p-3 text-left space-y-1">
                <h6 className="text-[10.5px] font-bold flex items-center gap-1 text-pink-700 font-heading">
                  <Smile className="w-3.5 h-3.5" /> Precisa de Suporte?
                </h6>
                <p className="text-[10px] text-stone-600 leading-relaxed">
                  Se você tiver qualquer dúvida sobre a impressão ou quiser falar com nossa equipe, entre em contato via WhatsApp. Teremos alegria em ajudar!
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep('info');
                    onClose();
                  }}
                  className="text-stone-400 hover:text-stone-600 text-xs underline"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          )}

        </div>
        
        {/* Footer Guarantee Seal */}
        <div className="bg-stone-50 px-5 py-3 border-t border-stone-200 flex justify-center items-center gap-1.5 text-stone-500 text-[10px]">
          <ShieldCheck className="w-4 h-4 text-sky-pastel-500" />
          <span>Garantia de Felicidade de 7 Dias • Ambiente 100% Protegido</span>
        </div>

      </div>
    </div>
  );
}
