import React, { useState } from 'react';
import { analyzePsalmDeeply, generateSpiritualImage, editSpiritualImage } from '../services/geminiService';
import { AspectRatio, ImageSize, PsalmAnalysisState, ImageGenerationState } from '../types';
import { Sparkles, Brain, Image as ImageIcon, Wand2, Loader2, Download } from 'lucide-react';

const GeminiDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'study' | 'art'>('study');
  
  // Study State
  const [psalmTopic, setPsalmTopic] = useState('');
  const [selectedPsalm, setSelectedPsalm] = useState('23');
  const [analysisState, setAnalysisState] = useState<PsalmAnalysisState>({
    isLoading: false,
    result: null,
    error: null
  });

  // Art State
  const [artPrompt, setArtPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.Square);
  const [imageSize, setImageSize] = useState<ImageSize>(ImageSize.OneK);
  const [imageState, setImageState] = useState<ImageGenerationState>({
    isLoading: false,
    imageUrl: null,
    error: null
  });
  const [editInstruction, setEditInstruction] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleAnalysis = async () => {
    if (!psalmTopic) return;
    setAnalysisState({ isLoading: true, result: null, error: null });
    try {
      const result = await analyzePsalmDeeply(selectedPsalm, psalmTopic);
      setAnalysisState({ isLoading: false, result, error: null });
    } catch (e) {
      setAnalysisState({ isLoading: false, result: null, error: "Erro ao conectar com o assistente inteligente." });
    }
  };

  const handleImageGeneration = async () => {
    if (!artPrompt) return;
    setImageState({ isLoading: true, imageUrl: null, error: null });
    try {
      const url = await generateSpiritualImage(artPrompt, aspectRatio, imageSize);
      setImageState({ isLoading: false, imageUrl: url, error: null });
    } catch (e) {
      setImageState({ isLoading: false, imageUrl: null, error: "Erro ao gerar a arte sacra." });
    }
  };

  const handleImageEdit = async () => {
    if (!imageState.imageUrl || !editInstruction) return;
    setIsEditing(true);
    try {
      const url = await editSpiritualImage(imageState.imageUrl, editInstruction);
      setImageState(prev => ({ ...prev, imageUrl: url }));
    } catch (e) {
      alert("Erro ao editar imagem");
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block p-2 px-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 mb-4">
            <span className="flex items-center gap-2 text-indigo-300 font-semibold text-sm uppercase tracking-wide">
              <Sparkles size={16} />
              Tecnologia a favor da Fé
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-white">
            Experimente a Profundidade <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">Interativa</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Além do guia em PDF, veja como nossa inteligência artificial pode auxiliar seu estudo e meditação visual. Esta é uma demonstração do poder de aliar tecnologia e espiritualidade.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex border-b border-white/10">
            <button 
              onClick={() => setActiveTab('study')}
              className={`flex-1 py-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'study' ? 'bg-white/10 text-gold-400' : 'text-gray-400 hover:text-white'}`}
            >
              <Brain size={20} />
              Assistente Teológico (Gemini Pro)
            </button>
            <button 
              onClick={() => setActiveTab('art')}
              className={`flex-1 py-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'art' ? 'bg-white/10 text-gold-400' : 'text-gray-400 hover:text-white'}`}
            >
              <ImageIcon size={20} />
              Arte Visual (Gemini 3 Pro)
            </button>
          </div>

          <div className="p-6 md:p-8 min-h-[500px]">
            {activeTab === 'study' ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-4">
                    <label className="block text-sm font-medium text-gray-300">Escolha um Salmo</label>
                    <select 
                      value={selectedPsalm}
                      onChange={(e) => setSelectedPsalm(e.target.value)}
                      className="w-full bg-navy-900/50 border border-white/20 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                    >
                      {['1', '23', '91', '119', '121', '150'].map(num => (
                        <option key={num} value={num}>Salmo {num}</option>
                      ))}
                    </select>

                    <label className="block text-sm font-medium text-gray-300">Foco do Estudo</label>
                    <input 
                      type="text" 
                      value={psalmTopic}
                      onChange={(e) => setPsalmTopic(e.target.value)}
                      placeholder="Ex: Consolo na angústia..."
                      className="w-full bg-navy-900/50 border border-white/20 rounded-lg p-3 text-white focus:border-gold-500 outline-none placeholder-gray-500"
                    />

                    <button 
                      onClick={handleAnalysis}
                      disabled={analysisState.isLoading || !psalmTopic}
                      className="w-full bg-gold-600 hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed text-navy-900 font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
                    >
                      {analysisState.isLoading ? <Loader2 className="animate-spin" /> : <Brain />}
                      Analisar Profundamente
                    </button>
                    <p className="text-xs text-gray-500 mt-2">*Utiliza o modo "Thinking" do Gemini para análise teológica profunda.</p>
                  </div>

                  <div className="md:col-span-2 bg-navy-900/30 rounded-xl p-6 border border-white/10 min-h-[300px] overflow-y-auto">
                    {analysisState.isLoading ? (
                      <div className="h-full flex flex-col items-center justify-center text-gold-400">
                        <Loader2 className="animate-spin mb-4" size={40} />
                        <p className="animate-pulse">Consultando séculos de teologia...</p>
                      </div>
                    ) : analysisState.result ? (
                      <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-serif text-gold-400 mb-4">Análise do Salmo {selectedPsalm}</h3>
                        <div className="whitespace-pre-wrap text-gray-300 leading-relaxed font-light">
                          {analysisState.result}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-500 text-center">
                        <p>Selecione um Salmo e um tema para iniciar o estudo assistido.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Descreva a cena espiritual</label>
                      <textarea 
                        value={artPrompt}
                        onChange={(e) => setArtPrompt(e.target.value)}
                        placeholder="Ex: Um pastor guiando ovelhas em um vale verdejante com luz divina, estilo renascentista..."
                        className="w-full h-32 bg-navy-900/50 border border-white/20 rounded-lg p-3 text-white focus:border-gold-500 outline-none resize-none placeholder-gray-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Proporção</label>
                        <select 
                          value={aspectRatio}
                          onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                          className="w-full bg-navy-900/50 border border-white/20 rounded-lg p-3 text-white outline-none"
                        >
                          {Object.values(AspectRatio).map(ratio => (
                            <option key={ratio} value={ratio}>{ratio}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Resolução</label>
                        <select 
                          value={imageSize}
                          onChange={(e) => setImageSize(e.target.value as ImageSize)}
                          className="w-full bg-navy-900/50 border border-white/20 rounded-lg p-3 text-white outline-none"
                        >
                          {Object.values(ImageSize).map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button 
                      onClick={handleImageGeneration}
                      disabled={imageState.isLoading || !artPrompt}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all flex justify-center items-center gap-2"
                    >
                      {imageState.isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                      Gerar Arte Sacra
                    </button>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-black/30 rounded-xl border border-white/10 min-h-[400px] p-4 relative">
                    {imageState.isLoading ? (
                      <div className="text-center text-purple-300">
                        <Loader2 className="animate-spin mb-4 mx-auto" size={40} />
                        <p>A inteligência artificial está pintando sua visão...</p>
                      </div>
                    ) : imageState.imageUrl ? (
                      <div className="relative w-full h-full flex flex-col items-center">
                        <img 
                          src={imageState.imageUrl} 
                          alt="Generated Art" 
                          className="max-h-[350px] w-auto object-contain rounded-lg shadow-2xl mb-4"
                        />
                        
                        {/* Editing Section */}
                        <div className="w-full mt-2 pt-4 border-t border-white/10">
                          <div className="flex gap-2">
                             <input 
                               type="text" 
                               value={editInstruction}
                               onChange={(e) => setEditInstruction(e.target.value)}
                               placeholder="Edição: ex. 'Adicionar raios de sol'"
                               className="flex-1 bg-navy-900/50 border border-white/20 rounded text-sm px-3 text-white"
                             />
                             <button 
                               onClick={handleImageEdit}
                               disabled={isEditing || !editInstruction}
                               className="bg-indigo-600 px-4 py-2 rounded text-sm font-semibold hover:bg-indigo-500 disabled:opacity-50"
                             >
                               {isEditing ? <Loader2 className="animate-spin" size={16} /> : "Editar"}
                             </button>
                             <a 
                              href={imageState.imageUrl} 
                              download="salmo-art.png"
                              className="bg-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-600 flex items-center"
                             >
                               <Download size={16} />
                             </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-500 text-center p-8">
                        <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Descreva uma cena bíblica para visualizar.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiDemo;