import { type Connection } from '@libp2p/interface'
import { type Multiaddr } from '@multiformats/multiaddr'
import { Circuit, WebRTC, WebRTCDirect, WebSockets, WebSocketsSecure, WebTransport } from '@multiformats/multiaddr-matcher'
import React, { useMemo } from 'react'
import { useFilesDispatch, useFiles } from '../../hooks/use-files.js'
import { useHelia } from '../../hooks/use-helia.js'
import { NodeInfoDetail } from './node-info-detail.jsx'


export interface NodeInfoProps {

}

export const NodeInfo_z: React.FC<NodeInfoProps> = () => {
  const { nodeInfo } = useHelia()
  const dispatch_z = useFilesDispatch()
  const { peerId, multiaddrs, connections } = nodeInfo ?? {}
  const { provideToDHT } = useFiles()

  const { listeningAddrs, circuitRelayAddrs, webRtc, webRtcDirect, webTransport, webSockets, webSocketsSecure } = useMemo(() => {
    const base_z = {
      listeningAddrs: 0, 
      circuitRelayAddrs: 0, 
      webRtc: 0, 
      webRtcDirect: 0, 
      webTransport: 0, 
      webSockets: 0, 
      webSocketsSecure: 0 
    }

    if (multiaddrs == null) {
      return base
    }
    return multiaddrs.reduce(
      (acc: typeof base, addr: Multiaddr) => {
        acc.listeningAddrs++
        if (Circuit.exactMatch(addr)) {
          acc.circuitRelayAddrs++
        }
        if (WebRTC.exactMatch(addr)) {
          acc.webRtc++
        }
        if (Circuit.exactMatch(addr) && WebRTCDirect.matches(addr)) {
          acc.webRtcDirect++
        }
        if (Circuit.exactMatch(addr) && WebTransport.matches(addr)) {
          acc.webTransport++
        }
        if (Circuit.exactMatch(addr) && WebSockets.matches(addr)) {
          acc.webSockets++
        }
        if (Circuit.exactMatch(addr) && WebSocketsSecure.matches(addr)) {
          acc.webSocketsSecure++
        }
        return acc
      },
      base
    )
  }, [multiaddrs])

  const { totalConns, inboundConns, outboundConns, unlimitedConns } = useMemo(() => {
    const base_z = { totalConns: 0, inboundConns: 0, outboundConns: 0, unlimitedConns: 0 }
    if (connections == null) {
      return base
    }

    return connections?.reduce(
      (acc: typeof base, conn: Connection) => {
        if (conn.direction === 'inbound') {
          acc.inboundConns++
        } else if (conn.direction === 'outbound') {
          acc.outboundConns++
        }
        if (conn.limits == null) {
          acc.unlimitedConns++
        }
        acc.totalConns++
        return acc
      },
      base
    )
  }, [connections])

  if (peerId == null) {
    return null
  }

  return (
    <div className='ml2 pb2 f5 gray-muted montserrat mw7'>
      <NodeInfoDetail label='Peer ID' value={peerId} />
      <NodeInfoDetail label='ListeningAddrs' value={`${listeningAddrs} (relayed: ${circuitRelayAddrs}, WebRTC: ${webRtc}, Secure WebSockets: ${webSocketsSecure}, WebRTC Direct: ${webRtcDirect}, WebTransport: ${webTransport}, WebSockets: ${webSockets})`} />
      {}
      <NodeInfoDetail label='Dialable from other Browsers' value={` ${(webRtcDirect + webSocketsSecure + (window.isSecureContext ? webSockets : 0)) > 0 ? '✅' : '❌'}`} />
      <NodeInfoDetail label='Connections' value={`${totalConns} (${inboundConns} in, ${outboundConns} out, ${unlimitedConns} unlimited)`} />
      <div className='flex items-center mt2'>
        <input
          type="checkbox"
          id="provideToDHT"
          checked={provideToDHT}
          onChange={(e) => { dispatch({ type: 'set_provide_to_dht', provideToDHT: e.target.checked }) }}
          className="mr2"
        />
        <label htmlFor="provideToDHT" className="ma0">Provide CIDs to DHT</label>
      </div>
    </div>
  )
}

export default NodeInfo
