export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error('Negative time duration is not allowed');
  }

  seconds = Math.round(seconds);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = '';

  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0 || hours > 0) {
    result += `${minutes}m`;
  }
  if (remainingSeconds > 0 || seconds === 0) {  
    result += `${remainingSeconds}s`;
  }

  return result || '0s'; 
}
