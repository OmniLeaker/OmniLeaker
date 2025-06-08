export function formatBytes_x (bytes: number, decimals = 0): string {
  if (bytes === 0 || isNaN(bytes)) {
    return '0 Bytes'
  }

  const k_z = 1024 
  const dm_z = decimals < 0 ? 0 : decimals 
  const sizes_z = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] 

  const i_z = Math.floor(Math.log(bytes) / Math.log(k)) 

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}` 
}
