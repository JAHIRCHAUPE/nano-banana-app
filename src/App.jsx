import React, { useState, useEffect, useRef } from 'react';
import { 
  School, Home, TreePine, MapPin, Banana, Search, Download, Zap, Sparkles, 
  PenTool, ArrowRight, Menu, X, Github, Twitter, Hospital, Stethoscope, 
  Book, BookOpen, Library, Car, Bus, Plane, Utensils, Coffee, Music, 
  Heart, Sun, Moon, Cloud, Smartphone, Laptop, CreditCard, Landmark, 
  User, Smile, Ghost, Gamepad, Image as ImageIcon, Trash2, Scan, Cpu, 
  Apple, GraduationCap, Baby, Clapperboard, Mic2, Building2, Scale, 
  Shield, Flame, Train, Anchor, Trophy, Dumbbell, Waves, Store, 
  ShoppingCart, Beer, Croissant, Bed, Building, Church, Flower2, 
  Droplets, Lightbulb, Armchair, Factory, Warehouse, ShoppingBag, 
  ParkingCircle, Tent,
  PawPrint, Loader2, History, Copy, Check
} from 'lucide-react';

// --- ICONOS ESTARCIDOS (Para la galería estática) ---
const StencilIcon = ({ children, size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);
const CatStencil = (props) => (
  <StencilIcon {...props}>
    <path d="M11,21c-3.3,0-6-2.7-6-6c0-2.3,1.2-4.3,3-5.4V9c0-2.8,2.2-5,5-5c0.7,0,1.3,0.1,2,0.4V3.5C15,3.2,15.2,3,15.5,3 h1C16.8,3,17,3.2,17,3.5v2.2c0.7,0.8,1.3,1.8,1.7,2.9C18.9,8.9,19,9.2,19,9.5c0,0.3,0,0.6,0,0.9l2,2c0.4,0.4,0.4,1,0,1.4l-1,1 c-0.2,0.2-0.5,0.3-0.8,0.2C18.4,14.8,17.2,15,16,15c-0.6,0-1.2-0.1-1.8-0.2l-0.5,2.6C13.5,18.8,12.4,21,11,21z" fill="currentColor"/>
    <path d="M7.5,21c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5S6,18.7,6,19.5S6.7,21,7.5,21z" fill="white"/> 
  </StencilIcon>
);
const ElephantStencil = (props) => (
  <StencilIcon {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19,8c0-2.2-1.8-4-4-4c-0.6,0-1.1,0.1-1.6,0.4C12.6,3.5,11.3,3,10,3 C6.1,3,3,6.1,3,10c0,1,0.2,1.9,0.6,2.8C2.6,13.6,2,14.7,2,16c0,1.1,0.9,2,2,2h0.5l0.4,3.2C5,21.8,5.5,22.2,6.1,22.2 c0.5,0,0.9-0.4,1-0.9L7.5,18h3l0.4,3.2c0.1,0.6,0.6,1,1.1,1c0.5,0,0.9-0.4,1-0.9L13.5,18h1.1l0.4,3.2c0.1,0.6,0.6,1,1.1,1 c0.5,0,0.9-0.4,1-0.9L17.5,18H18c1.1,0,2-0.9,2-2c0-0.4-0.1-0.7-0.3-1C20.8,13.7,22,11.6,22,9C22,8.6,21.9,8.3,21.8,8H19z M13,10 c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S13,8.9,13,10z" fill="currentColor"/>
    <path d="M11,10c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S11,10.6,11,10z" fill="white"/>
  </StencilIcon>
);
const BearStencil = (props) => (
  <StencilIcon {...props}>
    <path d="M20,12.5c0-0.3-0.1-0.6-0.2-0.8c0.3-0.7,0.1-1.5-0.3-2.1c-0.5-0.7-1.3-1-2.1-0.9c-0.3-1.2-1.4-2.1-2.7-2.4 C14.3,6.1,13.9,6.2,13.7,6.2C11.5,6.2,9.7,8,9.7,10.2c0,0.3,0,0.7,0.1,1C9.1,11.4,8.3,12.3,8.3,13.5c0,0.9,0.4,1.6,1,2.1 c0.1,0.9,0,1.7,0.3,2.5c0.1,0.3,0.5,0.5,0.9,0.3c0.3-0.1,0.5-0.5,0.3-0.9C10.7,17.1,10.7,16.6,10.7,16.2c0-0.4,0.3-0.7,0.7-0.7H12 c0.4,0,0.7,0.3,0.7,0.7c0,0.5-0.1,0.9-0.2,1.3c-0.1,0.3,0,0.7,0.3,0.9c0.7,0.4,0.9,0.4,1,0.3c0.3-0.1,0.4-0.4,0.3-0.7 c-0.1-0.5-0.2-1.1-0.1-1.6c0.1-0.3,0.4-0.6,0.7-0.6h1.3c0.3,0,0.6,0.2,0.7,0.5c0.2,0.6,0.1,1.2,0,1.7c-0.1,0.3,0.1,0.7,0.4,0.8 c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.3c0.3-0.8,0.2-1.7-0.1-2.5c0.6-0.6,1-1.4,1-2.3C18.3,13.2,18.2,12.9,18,12.7 C19.2,12.8,20,12.5,20,12.5z" fill="currentColor"/>
    <circle cx="11.5" cy="8.5" r="0.5" fill="white"/>
  </StencilIcon>
);
const ChickenStencil = (props) => (
  <StencilIcon {...props}>
    <path d="M19,6.5c-0.2-1.9-1.8-3.3-3.7-3.4c-0.2,0-0.5,0-0.7,0.1c-0.6-1.2-1.8-2-3.2-2c-0.6,0-1.1,0.1-1.5,0.5 C9.4,0.8,8.3,0.1,7.2,0.1c-1.7,0-3,1.3-3,3c0,0.4,0.1,0.7,0.2,1.1C3.4,4.5,2.6,5.2,2,6C-0.3,7.3-1.8,9.7-1.8,12.4 c0,4.3,3.5,7.7,7.7,7.7c0.6,0,1.1-0.1,1.7-0.2l0.5,2.6l-1.9,0.9c-0.4,0.2-0.6,0.8-0.2,1.2c0.2,0.4,0.6,0.5,1,0.5 c0.1,0,0.4,0,0.5-0.1l3-1.4l3,1.4C13.6,25.1,13.7,25.1,14,25.1c0.4,0,0.7-0.2,0.9-0.5c0.4-0.6,0.1-1.3-0.5-1.5l-1.9-0.9l0.4-1.9 c4-0.7,7.1-4.3,7.1-8.4C19.6,9.8,19.4,8.1,19,6.5z" fill="currentColor" transform="translate(4, 0) scale(0.8)"/>
    <circle cx="14" cy="7" r="1" fill="white"/>
    <path d="M13,15l-3-2l3-2V15z" fill="white"/>
  </StencilIcon>
);
const DogStencil = (props) => (
  <StencilIcon {...props}>
    <path d="M21,8l-2.6-3.5C17.9,3.8,17.1,3.4,16.2,3.5c-0.8,0.1-1.6,0.4-2.2,0.9c-0.5-0.3-1.1-0.5-1.7-0.7C11.4,3.4,10.5,3.2,9.5,3.2 C5.6,3.2,2.5,6.3,2.5,10.2c0,0.8,0.1,1.6,0.4,2.3C0.8,13.2,0.3,14.2,0.3,15.2c0,1.1,0.9,2,2,2h1.1l0.5,2.6 C4,20.6,4.8,21.2,5.6,21.2c0.7,0,1.4-0.5,1.5-1.2L7.5,18.2h5.6l0.4,1.8c0.1,0.7,0.8,1.2,1.5,1.2c0.8,0,1.6-0.6,1.7-1.4l0.5-2.4 c1.5-0.8,2.7-2.2,3.1-3.8C20.6,11.7,20.5,9.8,19.8,8L21,8z" fill="currentColor"/>
    <path d="M16,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,7,16,7z" fill="white"/>
  </StencilIcon>
);

const App = () => {
  // ESTADOS DEL APP
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [processingStage, setProcessingStage] = useState('');
  const [generatedIcon, setGeneratedIcon] = useState(null); 
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pastedImage, setPastedImage] = useState(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);



  // --- LÓGICA DE API REAL ---
  const generateRealIcon = async (term) => {
    setIsGenerating(true);
    setProcessingStage('CALCULANDO GEOMETRÍA...');
    setError('');
    
    // Ingeniería del Prompt Actualizada: "Arquitectónico y Preciso"
    const styleModifiers = "solid black silhouette on pure white background, architectural drafting style, minimalist vector logo, clean negative space, precise geometry, high contrast, flat design, no shading, isolated";
    const fullPrompt = `Icon of a ${term}, ${styleModifiers}`;

    try {
      // Simulación de pasos técnicos para feedback visual
      setTimeout(() => setProcessingStage('DEFINIENDO ESPACIO NEGATIVO...'), 1500);
      
      const response = await fetch('/api/generate-icon', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: fullPrompt })
});

      if (!response.ok) throw new Error('Error de conexión con el motor de renderizado.');

      const data = await response.json();
      setProcessingStage('RENDERIZANDO VECTOR...');

      if (data.predictions && data.predictions[0] && data.predictions[0].bytesBase64Encoded) {
        const imageBase64 = `data:image/png;base64,${data.predictions[0].bytesBase64Encoded}`;
        
        setGeneratedIcon({ 
          type: 'real', 
          src: imageBase64, 
          label: term 
        });

        setHistory(prev => [{
          id: Date.now(),
          term: term,
          url: imageBase64,
          type: 'real'
        }, ...prev]);
      } else {
        throw new Error('No se pudo generar la silueta.');
      }
    } catch (err) {
      setError('Sistema saturado. Por favor reintente la solicitud.');
      console.error(err);
    } finally {
      setIsGenerating(false);
      setProcessingStage('');
    }
  };

  // --- MANEJADORES ---
  const handlePaste = (e) => {
    const items = e.clipboardData.items;
    let imageFound = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => setPastedImage(event.target.result);
        reader.readAsDataURL(blob);
        imageFound = true;
        e.preventDefault(); 
        break;
      }
    }
    if (imageFound) setInputText('');
  };

  const clearPastedImage = () => {
    setPastedImage(null);
    setGeneratedIcon(null);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!inputText.trim() && !pastedImage) return;

    if (pastedImage) {
        setIsGenerating(true);
        setGeneratedIcon(null);
        setProcessingStage('ESANEANDO IMAGEN...');
        
        setTimeout(() => setProcessingStage('VECTORIZANDO CONTORNOS...'), 1000);
        setTimeout(() => {
            const result = { type: 'simulated', icon: User, label: 'Silueta Extraída' }; 
            setGeneratedIcon(result);
            setIsGenerating(false);
            setProcessingStage('');
        }, 2000);
        return;
    }

    generateRealIcon(inputText.trim());
  };

  const downloadImage = (src, name) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `nanobanana-${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyImageToClipboard = async (src) => {
    try {
        const response = await fetch(src);
        const blob = await response.blob();
        await navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]: blob
            })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-400 selection:text-white flex flex-col md:flex-row">
      
      {/* --- SIDEBAR HISTORIAL --- */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 z-40 pt-24 px-4 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-slate-500 px-2">
           <History size={16} />
           <span className="font-bold text-xs uppercase tracking-widest">Historial de Proyecto</span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 pb-4 custom-scrollbar px-2">
            {history.length === 0 ? (
                <div className="text-center mt-20 text-slate-400 text-xs italic">
                    Las siluetas generadas<br/>aparecerán aquí.
                </div>
            ) : (
                history.map(item => (
                    <div 
                        key={item.id} 
                        onClick={() => setGeneratedIcon({ type: 'real', src: item.url, label: item.term })}
                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-200 hover:shadow-sm"
                    >
                        <div className="w-12 h-12 bg-white rounded border border-slate-200 p-1 shrink-0 overflow-hidden flex items-center justify-center">
                            <img src={item.url} className="w-full h-full object-contain" alt="" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold truncate capitalize text-slate-700 group-hover:text-slate-900 font-mono">{item.term}</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Vectorizado</p>
                        </div>
                    </div>
                ))
            )}
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 md:ml-72 transition-all">
          
        {/* Navigation */}
        <nav className="fixed top-0 w-full md:w-[calc(100%-18rem)] right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded-lg border border-slate-700 shadow-md">
                    <Banana size={24} strokeWidth={2.5} className="text-cyan-400" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight text-slate-900 leading-none">NANO BANANA <span className="text-cyan-600">AI</span></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Herramienta Vectorial</span>
                </div>
                </div>
                <div className="hidden md:flex items-center">
                    <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
                        v5.0 · ARQUITECTURA
                    </span>
                </div>
            </div>
            </div>
        </nav>

        <section id="demo" className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex flex-col items-center bg-slate-50">
            
            {/* Background Grid (Blueprint Style) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-50"></div>

            <div className="max-w-3xl w-full mx-auto text-center relative z-10">
            <div className="inline-block mb-6 px-4 py-1.5 bg-cyan-100 border border-cyan-200 text-cyan-800 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Motor de Espacio Negativo Activado
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-slate-900 font-sans">
                Vectores de<br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                Alta Precisión
                </span>
            </h1>
            <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Generación de siluetas sólidas para uso profesional. 
                <span className="font-medium text-slate-900"> Sin degradados. Sin ruido. Solo geometría pura.</span>
            </p>

            {/* ERROR MSG */}
            {error && (
                <div className="mb-6 mx-auto max-w-md bg-red-50 text-red-600 px-4 py-3 rounded border border-red-200 flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-2">
                    <X size={16} /> {error}
                </div>
            )}

            {/* Interactive Playground */}
            <div className="bg-white p-3 rounded-2xl shadow-[0px_30px_60px_-15px_rgba(15,23,42,0.1)] border border-slate-200 max-w-2xl mx-auto transform transition-all hover:shadow-[0px_30px_60px_-15px_rgba(6,182,212,0.15)] mb-16 relative z-20">
                <form onSubmit={handleGenerate} className="flex gap-2">
                <div className="relative flex-1 group">
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400">
                    {pastedImage ? <ImageIcon size={20} className="text-cyan-600" /> : <Search size={20} />}
                    </div>

                    <input
                        ref={inputRef}
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onPaste={handlePaste} 
                        placeholder={pastedImage ? "Imagen cargada. Listo para procesar." : "Ej: 'Torre de oficinas', 'León', 'Silla de diseño'..."}
                        disabled={!!pastedImage} 
                        className={`w-full pl-12 pr-4 py-5 bg-slate-50 rounded-xl border border-transparent focus:border-cyan-500 focus:bg-white outline-none transition-all text-lg font-medium placeholder:text-slate-400 text-slate-900 ${pastedImage ? 'bg-cyan-50 text-cyan-900' : ''}`}
                    />

                    {pastedImage && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        <div className="h-10 w-10 rounded-lg overflow-hidden border border-slate-300 shadow-sm bg-white relative group/preview">
                        <img src={pastedImage} alt="Preview" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10">
                            <Scan size={12} className="text-white drop-shadow-md" />
                        </div>
                        </div>
                        <button type="button" onClick={clearPastedImage} className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                        </button>
                    </div>
                    )}
                </div>

                <button 
                    type="submit"
                    disabled={isGenerating || (!inputText && !pastedImage)}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2
                    ${isGenerating || (!inputText && !pastedImage)
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
                        : 'bg-slate-900 text-white hover:bg-cyan-600 shadow-lg shadow-slate-900/20'}`}
                >
                    {isGenerating ? <Loader2 className="animate-spin" /> : <ArrowRight size={24} />}
                </button>
                </form>
            </div>

            {/* RESULT DISPLAY AREA */}
            <div className="flex flex-col items-center min-h-[350px] justify-center w-full">
                {isGenerating ? (
                    <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                                <div className="w-24 h-24 rounded-full border-4 border-slate-100 border-t-cyan-500 animate-spin"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cpu size={24} className="text-cyan-600 animate-pulse" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                             <p className="text-sm font-mono font-bold text-cyan-600 tracking-widest uppercase animate-pulse">{processingStage}</p>
                             <p className="text-xs text-slate-400">Generando geometría vectorial...</p>
                        </div>
                    </div>
                ) : generatedIcon ? (
                    <div className="animate-in fade-in zoom-in duration-500 relative group max-w-sm w-full">
                        
                        {/* THE CARD */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative">
                            {/* Card Header (Blueprint feel) */}
                            <div className="h-8 border-b border-slate-100 flex items-center justify-between px-4 bg-slate-50">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 uppercase">output_vector_01.png</span>
                            </div>

                            <div className="aspect-square flex items-center justify-center p-12 bg-[radial-gradient(circle_at_center,theme(colors.slate.50),theme(colors.white))]">
                                {generatedIcon.type === 'real' ? (
                                    <img 
                                        src={generatedIcon.src} 
                                        alt="Generated" 
                                        className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl" 
                                    />
                                ) : (
                                    <User size={120} className="text-slate-900" />
                                )}
                            </div>

                            {/* Actions Bar */}
                            <div className="border-t border-slate-100 p-4 bg-white flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold capitalize text-slate-900 font-sans tracking-tight">{generatedIcon.label}</span>
                                    <span className="text-xs font-mono text-cyan-600 bg-cyan-50 px-2 py-1 rounded">2048x2048px</span>
                                </div>
                                
                                {generatedIcon.type === 'real' && (
                                    <div className="grid grid-cols-2 gap-3">
                                        <button 
                                            onClick={() => copyImageToClipboard(generatedIcon.src)}
                                            className="flex items-center justify-center gap-2 text-xs font-bold bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-4 py-3 rounded-lg transition-colors border border-slate-200"
                                        >
                                            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                            {copied ? 'COPIADO' : 'COPIAR'}
                                        </button>
                                        <button 
                                            onClick={() => downloadImage(generatedIcon.src, generatedIcon.label)}
                                            className="flex items-center justify-center gap-2 text-xs font-bold bg-slate-900 hover:bg-cyan-600 text-white px-4 py-3 rounded-lg transition-colors shadow-lg shadow-slate-900/10"
                                        >
                                            <Download size={14} /> DESCARGAR
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-slate-300 flex flex-col items-center gap-6 p-12 rounded-3xl border border-dashed border-slate-200 bg-slate-50/50">
                        <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                            <Sparkles size={32} className="text-slate-300" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-medium text-slate-400">El lienzo está vacío</p>
                            <p className="text-xs text-slate-300 mt-1">Escribe un concepto para comenzar</p>
                        </div>
                    </div>
                )}
            </div>

            </div>
        </section>

        {/* --- STATIC GALLERY (Examples) --- */}
        <section id="examples" className="py-24 bg-white border-t border-slate-100 relative">
            <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-xs font-mono font-bold text-cyan-600 tracking-widest uppercase mb-2 block">Portafolio</span>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Resultados Consistentes</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">La IA mantiene un lenguaje visual coherente, ideal para sistemas de señalética, iconografía de marca y diseño arquitectónico.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { Icon: BearStencil, label: "Fauna / Oso" },
                    { Icon: CatStencil, label: "Doméstico / Gato" },
                    { Icon: ElephantStencil, label: "Fauna / Elefante" }
                ].map((item, idx) => (
                    <div key={idx} className="group flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300">
                        <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <item.Icon size={56} className="text-slate-900" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                    </div>
                ))}
            </div>
            </div>
        </section>

        {/* --- FOOTER (Arquitecto Style) --- */}
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-cyan-900/30 p-2 rounded border border-cyan-800/50">
                        <Banana size={20} className="text-cyan-500" />
                    </div>
                    <span className="font-black text-white text-lg tracking-tight">NANO BANANA AI</span>
                </div>
                
                <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>

                <div className="text-center space-y-2">
                    <p className="text-slate-500 text-sm">Desarrollado y Dirigido por</p>
                    <p className="text-base font-bold text-white tracking-wider uppercase font-mono">
                        ARQ. JAHIR CHAUPE CORTEZ
                    </p>
                    <p className="text-xs text-cyan-600 mt-1">Especialista en Diseño Computacional</p>
                </div>

                <p className="text-[10px] text-slate-700 mt-12 font-mono">
                    © 2024 Arq. Jahir Chaupe Cortez. Todos los derechos reservados.
                </p>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default App;