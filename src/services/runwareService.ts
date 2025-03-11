
import { RunwareService, GenerateImageParams } from '@/lib/runware';

// Create a service instance
const runwareService = new RunwareService(process.env.RUNWARE_API_KEY || '');

export const generateNegotiationRoomImage = async () => {
  const params: GenerateImageParams = {
    positivePrompt: `A luxurious real estate negotiation room in Dubai. Modern high-end conference room with a large glass table and elegant leather chairs. Floor-to-ceiling windows showing Dubai skyline. Well-dressed professionals in business attire discussing property deals. Documents, blueprints, and architectural models on table. Professional lighting with natural sunlight and pendant lamps. Ultra-modern style with glass, wood, and steel materials. Neutral colors with white, navy blue, and gold accents. Photorealistic quality.`,
    model: "runware:100@1",
    width: 1024,
    height: 1024,
    numberResults: 1,
    CFGScale: 1,
    scheduler: "FlowMatchEulerDiscreteScheduler",
    strength: 0.8
  };

  return await runwareService.generateImage(params);
};

