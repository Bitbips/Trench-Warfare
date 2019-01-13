/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
declare class PaperTiledImporterFactory extends Factory { 
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject | any): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject | any): LightPropagationVolumeBlendableFactory;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject | any): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static GetDefaultObject(): MyPluginObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject | any): MyPluginObject;
}

declare class CryptoKeysCommandlet extends Commandlet { 
	static Load(ResourceName: string): CryptoKeysCommandlet;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
	static GetDefaultObject(): CryptoKeysCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysCommandlet;
	static C(Other: UObject | any): CryptoKeysCommandlet;
}

declare class CryptoEncryptionKey { 
	Guid: Guid;
	Name: string;
	Key: string;
	clone() : CryptoEncryptionKey;
	static C(Other: UObject | any): CryptoEncryptionKey;
}

declare class CryptoKeysSettings extends UObject { 
	EncryptionKey: string;
	SecondaryEncryptionKeys: CryptoEncryptionKey[];
	bEncryptPakIniFiles: boolean;
	bEncryptPakIndex: boolean;
	bEncryptUAssetFiles: boolean;
	bEncryptAllAssetFiles: boolean;
	SigningPublicExponent: string;
	SigningModulus: string;
	SigningPrivateExponent: string;
	bEnablePakSigning: boolean;
	static Load(ResourceName: string): CryptoKeysSettings;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
	static GetDefaultObject(): CryptoKeysSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysSettings;
	static C(Other: UObject | any): CryptoKeysSettings;
}

declare class EditableMeshAdapter extends UObject { 
	static Load(ResourceName: string): EditableMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableMeshAdapter;
	static GetDefaultObject(): EditableMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshAdapter;
	static C(Other: UObject | any): EditableMeshAdapter;
}

declare class ElementID { 
	IDValue: number;
	clone() : ElementID;
	static C(Other: UObject | any): ElementID;
}

declare class VertexID extends ElementID { 
	clone() : VertexID;
	static C(Other: UObject | any): VertexID;
}

declare class EdgeID extends ElementID { 
	clone() : EdgeID;
	static C(Other: UObject | any): EdgeID;
}

declare class PolygonID extends ElementID { 
	clone() : PolygonID;
	static C(Other: UObject | any): PolygonID;
}

declare type ETriangleTessellationMode = 'ThreeTriangles' | 'FourTriangles' | 'ETriangleTessellationMode_MAX';
declare var ETriangleTessellationMode : { ThreeTriangles:'ThreeTriangles',FourTriangles:'FourTriangles',ETriangleTessellationMode_MAX:'ETriangleTessellationMode_MAX', };
declare type EMeshModificationType = 'FirstInterim' | 'Interim' | 'Final' | 'EMeshModificationType_MAX';
declare var EMeshModificationType : { FirstInterim:'FirstInterim',Interim:'Interim',Final:'Final',EMeshModificationType_MAX:'EMeshModificationType_MAX', };
declare type EMeshTopologyChange = 'NoTopologyChange' | 'TopologyChange' | 'EMeshTopologyChange_MAX';
declare var EMeshTopologyChange : { NoTopologyChange:'NoTopologyChange',TopologyChange:'TopologyChange',EMeshTopologyChange_MAX:'EMeshTopologyChange_MAX', };
declare class VertexPair { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	clone() : VertexPair;
	static C(Other: UObject | any): VertexPair;
}

declare class PolygonToSplit { 
	PolygonID: PolygonID;
	VertexPairsToSplitAt: VertexPair[];
	clone() : PolygonToSplit;
	static C(Other: UObject | any): PolygonToSplit;
}

declare class MeshElementAttributeValue { 
	clone() : MeshElementAttributeValue;
	static C(Other: UObject | any): MeshElementAttributeValue;
}

declare class MeshElementAttributeData { 
	AttributeName: string;
	AttributeIndex: number;
	AttributeValue: MeshElementAttributeValue;
	clone() : MeshElementAttributeData;
	static C(Other: UObject | any): MeshElementAttributeData;
}

declare class MeshElementAttributeList { 
	Attributes: MeshElementAttributeData[];
	clone() : MeshElementAttributeList;
	static C(Other: UObject | any): MeshElementAttributeList;
}

declare class AttributesForVertex { 
	VertexID: VertexID;
	VertexAttributes: MeshElementAttributeList;
	clone() : AttributesForVertex;
	static C(Other: UObject | any): AttributesForVertex;
}

declare class VertexInstanceID extends ElementID { 
	clone() : VertexInstanceID;
	static C(Other: UObject | any): VertexInstanceID;
}

declare class AttributesForVertexInstance { 
	VertexInstanceID: VertexInstanceID;
	VertexInstanceAttributes: MeshElementAttributeList;
	clone() : AttributesForVertexInstance;
	static C(Other: UObject | any): AttributesForVertexInstance;
}

declare class VertexAttributesForPolygonHole { 
	VertexAttributeList: MeshElementAttributeList[];
	clone() : VertexAttributesForPolygonHole;
	static C(Other: UObject | any): VertexAttributesForPolygonHole;
}

declare class VertexAttributesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexAttributeLists: MeshElementAttributeList[];
	VertexAttributeListsForEachHole: VertexAttributesForPolygonHole[];
	clone() : VertexAttributesForPolygon;
	static C(Other: UObject | any): VertexAttributesForPolygon;
}

declare class VerticesForEdge { 
	EdgeID: EdgeID;
	NewVertexID0: VertexID;
	NewVertexID1: VertexID;
	clone() : VerticesForEdge;
	static C(Other: UObject | any): VerticesForEdge;
}

declare class AttributesForEdge { 
	EdgeID: EdgeID;
	EdgeAttributes: MeshElementAttributeList;
	clone() : AttributesForEdge;
	static C(Other: UObject | any): AttributesForEdge;
}

declare class VertexToMove { 
	VertexID: VertexID;
	NewVertexPosition: Vector;
	clone() : VertexToMove;
	static C(Other: UObject | any): VertexToMove;
}

declare class PolygonGroupID extends ElementID { 
	clone() : PolygonGroupID;
	static C(Other: UObject | any): PolygonGroupID;
}

declare type EInsetPolygonsMode = 'All' | 'CenterPolygonOnly' | 'SidePolygonsOnly' | 'EInsetPolygonsMode_MAX';
declare var EInsetPolygonsMode : { All:'All',CenterPolygonOnly:'CenterPolygonOnly',SidePolygonsOnly:'SidePolygonsOnly',EInsetPolygonsMode_MAX:'EInsetPolygonsMode_MAX', };
declare class VertexAndAttributes { 
	VertexInstanceID: VertexInstanceID;
	VertexID: VertexID;
	PolygonVertexAttributes: MeshElementAttributeList;
	clone() : VertexAndAttributes;
	static C(Other: UObject | any): VertexAndAttributes;
}

declare class SubdividedQuadVertex { 
	VertexPositionIndex: number;
	TextureCoordinate0: Vector2D;
	TextureCoordinate1: Vector2D;
	VertexColor: Color;
	VertexNormal: Vector;
	VertexTangent: Vector;
	VertexBinormalSign: number;
	clone() : SubdividedQuadVertex;
	static C(Other: UObject | any): SubdividedQuadVertex;
}

declare class SubdividedQuad { 
	QuadVertex0: SubdividedQuadVertex;
	QuadVertex1: SubdividedQuadVertex;
	QuadVertex2: SubdividedQuadVertex;
	QuadVertex3: SubdividedQuadVertex;
	clone() : SubdividedQuad;
	static C(Other: UObject | any): SubdividedQuad;
}

declare class SubdivisionLimitSection { 
	SubdividedQuads: SubdividedQuad[];
	clone() : SubdivisionLimitSection;
	static C(Other: UObject | any): SubdivisionLimitSection;
}

declare class SubdividedWireEdge { 
	EdgeVertex0PositionIndex: number;
	EdgeVertex1PositionIndex: number;
	clone() : SubdividedWireEdge;
	static C(Other: UObject | any): SubdividedWireEdge;
}

declare class SubdivisionLimitData { 
	VertexPositions: Vector[];
	Sections: SubdivisionLimitSection[];
	SubdividedWireEdges: SubdividedWireEdge[];
	clone() : SubdivisionLimitData;
	static C(Other: UObject | any): SubdivisionLimitData;
}

declare class MeshTriangle { 
	VertexInstanceID0: VertexInstanceID;
	VertexInstanceID1: VertexInstanceID;
	VertexInstanceID2: VertexInstanceID;
	clone() : MeshTriangle;
	static C(Other: UObject | any): MeshTriangle;
}

declare class VertexToCreate { 
	VertexAttributes: MeshElementAttributeList;
	OriginalVertexID: VertexID;
	clone() : VertexToCreate;
	static C(Other: UObject | any): VertexToCreate;
}

declare class VertexInstanceToCreate { 
	VertexID: VertexID;
	VertexInstanceAttributes: MeshElementAttributeList;
	OriginalVertexInstanceID: VertexInstanceID;
	clone() : VertexInstanceToCreate;
	static C(Other: UObject | any): VertexInstanceToCreate;
}

declare class PolygonHoleVertices { 
	HoleVertices: VertexAndAttributes[];
	clone() : PolygonHoleVertices;
	static C(Other: UObject | any): PolygonHoleVertices;
}

declare type EPolygonEdgeHardness = 'NewEdgesSoft' | 'NewEdgesHard' | 'AllEdgesSoft' | 'AllEdgesHard' | 'EPolygonEdgeHardness_MAX';
declare var EPolygonEdgeHardness : { NewEdgesSoft:'NewEdgesSoft',NewEdgesHard:'NewEdgesHard',AllEdgesSoft:'AllEdgesSoft',AllEdgesHard:'AllEdgesHard',EPolygonEdgeHardness_MAX:'EPolygonEdgeHardness_MAX', };
declare class PolygonToCreate { 
	PolygonGroupID: PolygonGroupID;
	PerimeterVertices: VertexAndAttributes[];
	PolygonHoles: PolygonHoleVertices[];
	OriginalPolygonID: PolygonID;
	PolygonEdgeHardness: EPolygonEdgeHardness;
	clone() : PolygonToCreate;
	static C(Other: UObject | any): PolygonToCreate;
}

declare class PolygonGroupToCreate { 
	PolygonGroupAttributes: MeshElementAttributeList;
	OriginalPolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupToCreate;
	static C(Other: UObject | any): PolygonGroupToCreate;
}

declare class EdgeToCreate { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	ConnectedPolygons: PolygonID[];
	EdgeAttributes: MeshElementAttributeList;
	OriginalEdgeID: EdgeID;
	clone() : EdgeToCreate;
	static C(Other: UObject | any): EdgeToCreate;
}

declare class VertexIndexAndInstanceID { 
	ContourIndex: number;
	VertexInstanceID: VertexInstanceID;
	clone() : VertexIndexAndInstanceID;
	static C(Other: UObject | any): VertexIndexAndInstanceID;
}

declare class VertexInstancesForPolygonHole { 
	VertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	clone() : VertexInstancesForPolygonHole;
	static C(Other: UObject | any): VertexInstancesForPolygonHole;
}

declare class ChangeVertexInstancesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	VertexIndicesAndInstanceIDsForEachHole: VertexInstancesForPolygonHole[];
	clone() : ChangeVertexInstancesForPolygon;
	static C(Other: UObject | any): ChangeVertexInstancesForPolygon;
}

declare class PolygonGroupForPolygon { 
	PolygonID: PolygonID;
	PolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupForPolygon;
	static C(Other: UObject | any): PolygonGroupForPolygon;
}

declare class EditableMesh extends UObject { 
	Adapters: EditableMeshAdapter[];
	TextureCoordinateCount: number;
	PendingCompactCounter: number;
	SubdivisionCount: number;
	static Load(ResourceName: string): EditableMesh;
	static Find(Outer: UObject, ResourceName: string): EditableMesh;
	static GetDefaultObject(): EditableMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMesh;
	WeldVertices(VertexIDs: VertexID[],OutNewVertexID?: VertexID): {OutNewVertexID: VertexID};
	TryToRemoveVertex(VertexID: VertexID,bOutWasVertexRemoved?: boolean,OutNewEdgeID?: EdgeID): {bOutWasVertexRemoved: boolean, OutNewEdgeID: EdgeID};
	TryToRemovePolygonEdge(EdgeID: EdgeID,bOutWasEdgeRemoved?: boolean,OutNewPolygonID?: PolygonID): {bOutWasEdgeRemoved: boolean, OutNewPolygonID: PolygonID};
	TriangulatePolygons(PolygonIDs: PolygonID[],OutNewTrianglePolygons?: PolygonID[]): {OutNewTrianglePolygons: PolygonID[]};
	TessellatePolygons(PolygonIDs: PolygonID[],TriangleTessellationMode: ETriangleTessellationMode,OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	StartModification(MeshModificationType: EMeshModificationType,MeshTopologyChange: EMeshTopologyChange): void;
	SplitPolygons(PolygonsToSplit: PolygonToSplit[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	SplitEdge(EdgeID: EdgeID,Splits: number[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	SetVerticesCornerSharpness(VertexIDs: VertexID[],VerticesNewCornerSharpness: number[]): void;
	SetVerticesAttributes(AttributesForVertices: AttributesForVertex[]): void;
	SetVertexInstancesAttributes(AttributesForVertexInstances: AttributesForVertexInstance[]): void;
	SetTextureCoordinateCount(NumTexCoords: number): void;
	SetSubdivisionCount(NewSubdivisionCount: number): void;
	SetPolygonsVertexAttributes(VertexAttributesForPolygons: VertexAttributesForPolygon[]): void;
	SetEdgesVertices(VerticesForEdges: VerticesForEdge[]): void;
	SetEdgesHardnessAutomatically(EdgeIDs: EdgeID[],MaxDotProductForSoftEdge: number): void;
	SetEdgesHardness(EdgeIDs: EdgeID[],EdgesNewIsHard: boolean[]): void;
	SetEdgesCreaseSharpness(EdgeIDs: EdgeID[],EdgesNewCreaseSharpness: number[]): void;
	SetEdgesAttributes(AttributesForEdges: AttributesForEdge[]): void;
	SetAllowUndo(bInAllowUndo: boolean): void;
	SetAllowSpatialDatabase(bInAllowSpatialDatabase: boolean): void;
	SetAllowCompact(bInAllowCompact: boolean): void;
	SearchSpatialDatabaseForPolygonsPotentiallyIntersectingLineSegment(LineSegmentStart: Vector,LineSegmentEnd: Vector,OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	SearchSpatialDatabaseForPolygonsInVolume(Planes: Plane[],OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	RevertInstance(): EditableMesh;
	Revert(): void;
	RemovePolygonPerimeterVertices(PolygonID: PolygonID,FirstVertexNumberToRemove: number,NumVerticesToRemove: number,bDeleteOrphanedVertexInstances: boolean): void;
	RebuildRenderMesh(): void;
	QuadrangulateMesh(OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	PropagateInstanceChanges(): void;
	MoveVertices(VerticesToMove: VertexToMove[]): void;
	static MakeVertexID(VertexIndex: number): VertexID;
	static MakePolygonID(PolygonIndex: number): PolygonID;
	static MakePolygonGroupID(PolygonGroupIndex: number): PolygonGroupID;
	static MakeEdgeID(EdgeIndex: number): EdgeID;
	IsValidVertex(VertexID: VertexID): boolean;
	IsValidPolygonGroup(PolygonGroupID: PolygonGroupID): boolean;
	IsValidPolygon(PolygonID: PolygonID): boolean;
	IsValidEdge(EdgeID: EdgeID): boolean;
	IsUndoAllowed(): boolean;
	IsSpatialDatabaseAllowed(): boolean;
	IsPreviewingSubdivisions(): boolean;
	IsOrphanedVertex(VertexID: VertexID): boolean;
	IsCompactAllowed(): boolean;
	IsCommittedAsInstance(): boolean;
	IsCommitted(): boolean;
	IsBeingModified(): boolean;
	static InvalidVertexID(): VertexID;
	static InvalidPolygonID(): PolygonID;
	static InvalidPolygonGroupID(): PolygonGroupID;
	static InvalidEdgeID(): EdgeID;
	InsetPolygons(PolygonIDs: PolygonID[],InsetFixedDistance: number,InsetProgressTowardCenter: number,Mode: EInsetPolygonsMode,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	InsertPolygonPerimeterVertices(PolygonID: PolygonID,InsertBeforeVertexNumber: number,VerticesToInsert: VertexAndAttributes[]): void;
	InsertEdgeLoop(EdgeID: EdgeID,Splits: number[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	InitializeAdapters(): void;
	GetVertexPairEdge(VertexID: VertexID,NextVertexID: VertexID,bOutEdgeWindingIsReversed?: boolean): {bOutEdgeWindingIsReversed: boolean, $: EdgeID};
	GetVertexInstanceVertex(VertexInstanceID: VertexInstanceID): VertexID;
	GetVertexInstanceCount(): number;
	GetVertexInstanceConnectedPolygons(VertexInstanceID: VertexInstanceID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexInstanceConnectedPolygonCount(VertexInstanceID: VertexInstanceID): number;
	GetVertexInstanceConnectedPolygon(VertexInstanceID: VertexInstanceID,ConnectedPolygonNumber: number): PolygonID;
	GetVertexCount(): number;
	GetVertexConnectedPolygons(VertexID: VertexID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexConnectedEdges(VertexID: VertexID,OutConnectedEdgeIDs?: EdgeID[]): {OutConnectedEdgeIDs: EdgeID[]};
	GetVertexConnectedEdgeCount(VertexID: VertexID): number;
	GetVertexConnectedEdge(VertexID: VertexID,ConnectedEdgeNumber: number): EdgeID;
	GetVertexAdjacentVertices(VertexID: VertexID,OutAdjacentVertexIDs?: VertexID[]): {OutAdjacentVertexIDs: VertexID[]};
	GetTextureCoordinateCount(): number;
	GetSubdivisionLimitData(): SubdivisionLimitData;
	GetSubdivisionCount(): number;
	GetPolygonTriangulatedTriangleCount(PolygonID: PolygonID): number;
	GetPolygonTriangulatedTriangle(PolygonID: PolygonID,PolygonTriangleNumber: number): MeshTriangle;
	GetPolygonPerimeterVertices(PolygonID: PolygonID,OutPolygonPerimeterVertexIDs?: VertexID[]): {OutPolygonPerimeterVertexIDs: VertexID[]};
	GetPolygonPerimeterVertexInstances(PolygonID: PolygonID,OutPolygonPerimeterVertexInstanceIDs?: VertexInstanceID[]): {OutPolygonPerimeterVertexInstanceIDs: VertexInstanceID[]};
	GetPolygonPerimeterVertexInstance(PolygonID: PolygonID,PolygonVertexNumber: number): VertexInstanceID;
	GetPolygonPerimeterVertexCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterVertex(PolygonID: PolygonID,PolygonVertexNumber: number): VertexID;
	GetPolygonPerimeterEdges(PolygonID: PolygonID,OutPolygonPerimeterEdgeIDs?: EdgeID[]): {OutPolygonPerimeterEdgeIDs: EdgeID[]};
	GetPolygonPerimeterEdgeCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterEdge(PolygonID: PolygonID,PerimeterEdgeNumber: number,bOutEdgeWindingIsReversedForPolygon?: boolean): {bOutEdgeWindingIsReversedForPolygon: boolean, $: EdgeID};
	GetPolygonInGroup(PolygonGroupID: PolygonGroupID,PolygonNumber: number): PolygonID;
	GetPolygonHoleVertices(PolygonID: PolygonID,HoleNumber: number,OutHoleVertexIDs?: VertexID[]): {OutHoleVertexIDs: VertexID[]};
	GetPolygonHoleVertexInstances(PolygonID: PolygonID,HoleNumber: number,OutHoleVertexInstanceIDs?: VertexInstanceID[]): {OutHoleVertexInstanceIDs: VertexInstanceID[]};
	GetPolygonHoleVertexInstance(PolygonID: PolygonID,HoleNumber: number,PolygonVertexNumber: number): VertexInstanceID;
	GetPolygonHoleVertexCount(PolygonID: PolygonID,HoleNumber: number): number;
	GetPolygonHoleVertex(PolygonID: PolygonID,HoleNumber: number,PolygonVertexNumber: number): VertexID;
	GetPolygonHoleEdges(PolygonID: PolygonID,HoleNumber: number,OutHoleEdgeIDs?: EdgeID[]): {OutHoleEdgeIDs: EdgeID[]};
	GetPolygonHoleEdgeCount(PolygonID: PolygonID,HoleNumber: number): number;
	GetPolygonHoleEdge(PolygonID: PolygonID,HoleNumber: number,HoleEdgeNumber: number): EdgeID;
	GetPolygonHoleCount(PolygonID: PolygonID): number;
	GetPolygonGroupCount(): number;
	GetPolygonCountInGroup(PolygonGroupID: PolygonGroupID): number;
	GetPolygonCount(): number;
	GetPolygonAdjacentPolygons(PolygonID: PolygonID,OutAdjacentPolygons?: PolygonID[]): {OutAdjacentPolygons: PolygonID[]};
	GetGroupForPolygon(PolygonID: PolygonID): PolygonGroupID;
	GetFirstValidPolygonGroup(): PolygonGroupID;
	GetEdgeVertices(EdgeID: EdgeID,OutEdgeVertexID0?: VertexID,OutEdgeVertexID1?: VertexID): {OutEdgeVertexID0: VertexID, OutEdgeVertexID1: VertexID};
	GetEdgeVertex(EdgeID: EdgeID,EdgeVertexNumber: number): VertexID;
	GetEdgeThatConnectsVertices(VertexID0: VertexID,VertexID1: VertexID): EdgeID;
	GetEdgeLoopElements(EdgeID: EdgeID,EdgeLoopIDs?: EdgeID[]): {EdgeLoopIDs: EdgeID[]};
	GetEdgeCount(): number;
	GetEdgeConnectedPolygons(EdgeID: EdgeID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetEdgeConnectedPolygonCount(EdgeID: EdgeID): number;
	GetEdgeConnectedPolygon(EdgeID: EdgeID,ConnectedPolygonNumber: number): PolygonID;
	GeneratePolygonTangentsAndNormals(PolygonIDs: PolygonID[]): void;
	FlipPolygons(PolygonIDs: PolygonID[]): void;
	FindPolygonPerimeterVertexNumberForVertex(PolygonID: PolygonID,VertexID: VertexID): number;
	FindPolygonPerimeterEdgeNumberForVertices(PolygonID: PolygonID,EdgeVertexID0: VertexID,EdgeVertexID1: VertexID): number;
	FindPolygonLoop(EdgeID: EdgeID,OutEdgeLoopEdgeIDs?: EdgeID[],OutFlippedEdgeIDs?: EdgeID[],OutReversedEdgeIDPathToTake?: EdgeID[],OutPolygonIDsToSplit?: PolygonID[]): {OutEdgeLoopEdgeIDs: EdgeID[], OutFlippedEdgeIDs: EdgeID[], OutReversedEdgeIDPathToTake: EdgeID[], OutPolygonIDsToSplit: PolygonID[]};
	FindPolygonHoleVertexNumberForVertex(PolygonID: PolygonID,HoleNumber: number,VertexID: VertexID): number;
	FindPolygonHoleEdgeNumberForVertices(PolygonID: PolygonID,HoleNumber: number,EdgeVertexID0: VertexID,EdgeVertexID1: VertexID): number;
	ExtrudePolygons(Polygons: PolygonID[],ExtrudeDistance: number,bKeepNeighborsTogether: boolean,OutNewExtrudedFrontPolygons?: PolygonID[]): {OutNewExtrudedFrontPolygons: PolygonID[]};
	ExtendVertices(VertexIDs: VertexID[],bOnlyExtendClosestEdge: boolean,ReferencePosition: Vector,OutNewExtendedVertexIDs?: VertexID[]): {OutNewExtendedVertexIDs: VertexID[]};
	ExtendEdges(EdgeIDs: EdgeID[],bWeldNeighbors: boolean,OutNewExtendedEdgeIDs?: EdgeID[]): {OutNewExtendedEdgeIDs: EdgeID[]};
	EndModification(bFromUndo: boolean): void;
	DeleteVertexInstances(VertexInstanceIDsToDelete: VertexInstanceID[],bDeleteOrphanedVertices: boolean): void;
	DeleteVertexAndConnectedEdgesAndPolygons(VertexID: VertexID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygons(PolygonIDsToDelete: PolygonID[],bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygonGroups(PolygonGroupIDs: PolygonGroupID[]): void;
	DeleteOrphanVertices(VertexIDsToDelete: VertexID[]): void;
	DeleteEdges(EdgeIDsToDelete: EdgeID[],bDeleteOrphanedVertices: boolean): void;
	DeleteEdgeAndConnectedPolygons(EdgeID: EdgeID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	CreateVertices(VerticesToCreate: VertexToCreate[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateVertexInstances(VertexInstancesToCreate: VertexInstanceToCreate[],OutNewVertexInstanceIDs?: VertexInstanceID[]): {OutNewVertexInstanceIDs: VertexInstanceID[]};
	CreatePolygons(PolygonsToCreate: PolygonToCreate[],OutNewPolygonIDs?: PolygonID[],OutNewEdgeIDs?: EdgeID[]): {OutNewPolygonIDs: PolygonID[], OutNewEdgeIDs: EdgeID[]};
	CreatePolygonGroups(PolygonGroupsToCreate: PolygonGroupToCreate[],OutNewPolygonGroupIDs?: PolygonGroupID[]): {OutNewPolygonGroupIDs: PolygonGroupID[]};
	CreateMissingPolygonPerimeterEdges(PolygonID: PolygonID,OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	CreateMissingPolygonHoleEdges(PolygonID: PolygonID,HoleNumber: number,OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	CreateEmptyVertexRange(NumVerticesToCreate: number,OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateEdges(EdgesToCreate: EdgeToCreate[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	ComputePolygonTriangulation(PolygonID: PolygonID,OutTriangles?: MeshTriangle[]): {OutTriangles: MeshTriangle[]};
	ComputePolygonsSharedEdges(PolygonIDs: PolygonID[],OutSharedEdgeIDs?: EdgeID[]): {OutSharedEdgeIDs: EdgeID[]};
	ComputePolygonPlane(PolygonID: PolygonID): Plane;
	ComputePolygonNormal(PolygonID: PolygonID): Vector;
	ComputePolygonCenter(PolygonID: PolygonID): Vector;
	ComputeBoundingBoxAndSphere(): BoxSphereBounds;
	ComputeBoundingBox(): Box;
	ComputeBarycentricWeightForPointOnPolygon(PolygonID: PolygonID,PointOnPolygon: Vector,OutTriangle?: MeshTriangle,OutTriangleVertexWeights?: Vector): {OutTriangle: MeshTriangle, OutTriangleVertexWeights: Vector, $: boolean};
	CommitInstance(ComponentToInstanceTo: PrimitiveComponent): EditableMesh;
	Commit(): void;
	ChangePolygonsVertexInstances(VertexInstancesForPolygons: ChangeVertexInstancesForPolygon[]): void;
	BevelPolygons(PolygonIDs: PolygonID[],BevelFixedDistance: number,BevelProgressTowardCenter: number,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	AssignPolygonsToPolygonGroups(PolygonGroupForPolygons: PolygonGroupForPolygon[],bDeleteOrphanedPolygonGroups: boolean): void;
	AnyChangesToUndo(): boolean;
	static C(Other: UObject | any): EditableMesh;
}

declare class EditableMeshFactory extends UObject { 
	static Load(ResourceName: string): EditableMeshFactory;
	static Find(Outer: UObject, ResourceName: string): EditableMeshFactory;
	static GetDefaultObject(): EditableMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshFactory;
	static MakeEditableMesh(PrimitiveComponent: PrimitiveComponent,LODIndex: number): EditableMesh;
	static C(Other: UObject | any): EditableMeshFactory;
}

declare class EditableStaticMeshAdapter extends EditableMeshAdapter { 
	StaticMesh: StaticMesh;
	OriginalStaticMesh: StaticMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): EditableStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableStaticMeshAdapter;
	static GetDefaultObject(): EditableStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableStaticMeshAdapter;
	static C(Other: UObject | any): EditableStaticMeshAdapter;
}

declare class MeshEditorAssetContainer extends DataAsset { 
	HoveredGeometryMaterial: MaterialInterface;
	HoveredFaceMaterial: MaterialInterface;
	WireMaterial: MaterialInterface;
	SubdividedMeshWireMaterial: MaterialInterface;
	OverlayLineMaterial: MaterialInterface;
	OverlayPointMaterial: MaterialInterface;
	DefaultSound: SoundBase;
	static Load(ResourceName: string): MeshEditorAssetContainer;
	static Find(Outer: UObject, ResourceName: string): MeshEditorAssetContainer;
	static GetDefaultObject(): MeshEditorAssetContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorAssetContainer;
	static C(Other: UObject | any): MeshEditorAssetContainer;
}

declare class MeshEditorCommand extends UObject { 
	static Load(ResourceName: string): MeshEditorCommand;
	static Find(Outer: UObject, ResourceName: string): MeshEditorCommand;
	static GetDefaultObject(): MeshEditorCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorCommand;
	static C(Other: UObject | any): MeshEditorCommand;
}

declare class MeshEditorInstantCommand extends MeshEditorCommand { 
	static Load(ResourceName: string): MeshEditorInstantCommand;
	static Find(Outer: UObject, ResourceName: string): MeshEditorInstantCommand;
	static GetDefaultObject(): MeshEditorInstantCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorInstantCommand;
	static C(Other: UObject | any): MeshEditorInstantCommand;
}

declare class MeshEditorEditCommand extends MeshEditorCommand { 
	UndoText: string;
	bNeedsDraggingInitiated: boolean;
	bNeedsHoverLocation: boolean;
	static Load(ResourceName: string): MeshEditorEditCommand;
	static Find(Outer: UObject, ResourceName: string): MeshEditorEditCommand;
	static GetDefaultObject(): MeshEditorEditCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorEditCommand;
	static C(Other: UObject | any): MeshEditorEditCommand;
}

declare class MeshEditorCommandList extends UObject { 
	MeshEditorCommands: MeshEditorCommand[];
	static Load(ResourceName: string): MeshEditorCommandList;
	static Find(Outer: UObject, ResourceName: string): MeshEditorCommandList;
	static GetDefaultObject(): MeshEditorCommandList;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorCommandList;
	static C(Other: UObject | any): MeshEditorCommandList;
}

declare class MeshEditorModeProxyObject extends UObject { 
	static Load(ResourceName: string): MeshEditorModeProxyObject;
	static Find(Outer: UObject, ResourceName: string): MeshEditorModeProxyObject;
	static GetDefaultObject(): MeshEditorModeProxyObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorModeProxyObject;
	static C(Other: UObject | any): MeshEditorModeProxyObject;
}

declare class MeshEditorSelectionModifier extends UObject { 
	static Load(ResourceName: string): MeshEditorSelectionModifier;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSelectionModifier;
	static GetDefaultObject(): MeshEditorSelectionModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSelectionModifier;
	static C(Other: UObject | any): MeshEditorSelectionModifier;
}

declare class SelectSingleMeshElement extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectSingleMeshElement;
	static Find(Outer: UObject, ResourceName: string): SelectSingleMeshElement;
	static GetDefaultObject(): SelectSingleMeshElement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectSingleMeshElement;
	static C(Other: UObject | any): SelectSingleMeshElement;
}

declare class SelectPolygonsByGroup extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectPolygonsByGroup;
	static Find(Outer: UObject, ResourceName: string): SelectPolygonsByGroup;
	static GetDefaultObject(): SelectPolygonsByGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectPolygonsByGroup;
	static C(Other: UObject | any): SelectPolygonsByGroup;
}

declare class SelectPolygonsByConnectivity extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectPolygonsByConnectivity;
	static Find(Outer: UObject, ResourceName: string): SelectPolygonsByConnectivity;
	static GetDefaultObject(): SelectPolygonsByConnectivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectPolygonsByConnectivity;
	static C(Other: UObject | any): SelectPolygonsByConnectivity;
}

declare class SelectPolygonsBySmoothingGroup extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectPolygonsBySmoothingGroup;
	static Find(Outer: UObject, ResourceName: string): SelectPolygonsBySmoothingGroup;
	static GetDefaultObject(): SelectPolygonsBySmoothingGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectPolygonsBySmoothingGroup;
	static C(Other: UObject | any): SelectPolygonsBySmoothingGroup;
}

declare class MeshEditorSelectionModifiersList extends UObject { 
	SelectionModifiers: MeshEditorSelectionModifier[];
	static Load(ResourceName: string): MeshEditorSelectionModifiersList;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSelectionModifiersList;
	static GetDefaultObject(): MeshEditorSelectionModifiersList;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSelectionModifiersList;
	static C(Other: UObject | any): MeshEditorSelectionModifiersList;
}

declare class MeshEditorSettings extends UObject { 
	bSeparateSelectionSetPerMode: boolean;
	bOnlySelectVisibleMeshes: boolean;
	bOnlySelectVisibleElements: boolean;
	bAllowGrabberSphere: boolean;
	bAutoQuadrangulate: boolean;
	static Load(ResourceName: string): MeshEditorSettings;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSettings;
	static GetDefaultObject(): MeshEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSettings;
	static C(Other: UObject | any): MeshEditorSettings;
}

declare class WireframeMesh extends UObject { 
	static Load(ResourceName: string): WireframeMesh;
	static Find(Outer: UObject, ResourceName: string): WireframeMesh;
	static GetDefaultObject(): WireframeMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WireframeMesh;
	static C(Other: UObject | any): WireframeMesh;
}

declare class MeshEditorStaticMeshAdapter extends EditableMeshAdapter { 
	WireframeMesh: WireframeMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): MeshEditorStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): MeshEditorStaticMeshAdapter;
	static GetDefaultObject(): MeshEditorStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorStaticMeshAdapter;
	static C(Other: UObject | any): MeshEditorStaticMeshAdapter;
}

declare class MeshEditorSubdividedStaticMeshAdapter extends EditableMeshAdapter { 
	WireframeMesh: WireframeMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): MeshEditorSubdividedStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSubdividedStaticMeshAdapter;
	static GetDefaultObject(): MeshEditorSubdividedStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSubdividedStaticMeshAdapter;
	static C(Other: UObject | any): MeshEditorSubdividedStaticMeshAdapter;
}

declare class MeshElementTransformer extends ViewportTransformer { 
	static Load(ResourceName: string): MeshElementTransformer;
	static Find(Outer: UObject, ResourceName: string): MeshElementTransformer;
	static GetDefaultObject(): MeshElementTransformer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshElementTransformer;
	static C(Other: UObject | any): MeshElementTransformer;
}

declare class OverlayComponent extends MeshComponent { 
	LineMaterial: MaterialInterface;
	PointMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	static Load(ResourceName: string): OverlayComponent;
	static Find(Outer: UObject, ResourceName: string): OverlayComponent;
	static GetDefaultObject(): OverlayComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OverlayComponent;
	static C(Other: UObject | any): OverlayComponent;
}

declare class WireframeMeshComponent extends MeshComponent { 
	WireframeMesh: WireframeMesh;
	static Load(ResourceName: string): WireframeMeshComponent;
	static Find(Outer: UObject, ResourceName: string): WireframeMeshComponent;
	static GetDefaultObject(): WireframeMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WireframeMeshComponent;
	static C(Other: UObject | any): WireframeMeshComponent;
}

declare class AssignMaterialCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): AssignMaterialCommand;
	static Find(Outer: UObject, ResourceName: string): AssignMaterialCommand;
	static GetDefaultObject(): AssignMaterialCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssignMaterialCommand;
	static C(Other: UObject | any): AssignMaterialCommand;
}

declare class BevelPolygonCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): BevelPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): BevelPolygonCommand;
	static GetDefaultObject(): BevelPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BevelPolygonCommand;
	static C(Other: UObject | any): BevelPolygonCommand;
}

declare class InsetPolygonCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): InsetPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): InsetPolygonCommand;
	static GetDefaultObject(): InsetPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InsetPolygonCommand;
	static C(Other: UObject | any): InsetPolygonCommand;
}

declare class DeleteMeshElementCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): DeleteMeshElementCommand;
	static Find(Outer: UObject, ResourceName: string): DeleteMeshElementCommand;
	static GetDefaultObject(): DeleteMeshElementCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeleteMeshElementCommand;
	static C(Other: UObject | any): DeleteMeshElementCommand;
}

declare class EditVertexCornerSharpnessCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): EditVertexCornerSharpnessCommand;
	static Find(Outer: UObject, ResourceName: string): EditVertexCornerSharpnessCommand;
	static GetDefaultObject(): EditVertexCornerSharpnessCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditVertexCornerSharpnessCommand;
	static C(Other: UObject | any): EditVertexCornerSharpnessCommand;
}

declare class EditEdgeCreaseSharpnessCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): EditEdgeCreaseSharpnessCommand;
	static Find(Outer: UObject, ResourceName: string): EditEdgeCreaseSharpnessCommand;
	static GetDefaultObject(): EditEdgeCreaseSharpnessCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditEdgeCreaseSharpnessCommand;
	static C(Other: UObject | any): EditEdgeCreaseSharpnessCommand;
}

declare class ExtendEdgeCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): ExtendEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): ExtendEdgeCommand;
	static GetDefaultObject(): ExtendEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtendEdgeCommand;
	static C(Other: UObject | any): ExtendEdgeCommand;
}

declare class ExtendVertexCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): ExtendVertexCommand;
	static Find(Outer: UObject, ResourceName: string): ExtendVertexCommand;
	static GetDefaultObject(): ExtendVertexCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtendVertexCommand;
	static C(Other: UObject | any): ExtendVertexCommand;
}

declare class ExtrudePolygonCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): ExtrudePolygonCommand;
	static Find(Outer: UObject, ResourceName: string): ExtrudePolygonCommand;
	static GetDefaultObject(): ExtrudePolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtrudePolygonCommand;
	static C(Other: UObject | any): ExtrudePolygonCommand;
}

declare class FlipPolygonCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): FlipPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): FlipPolygonCommand;
	static GetDefaultObject(): FlipPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipPolygonCommand;
	static C(Other: UObject | any): FlipPolygonCommand;
}

declare class HardenEdgeCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): HardenEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): HardenEdgeCommand;
	static GetDefaultObject(): HardenEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HardenEdgeCommand;
	static C(Other: UObject | any): HardenEdgeCommand;
}

declare class SoftenEdgeCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): SoftenEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): SoftenEdgeCommand;
	static GetDefaultObject(): SoftenEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoftenEdgeCommand;
	static C(Other: UObject | any): SoftenEdgeCommand;
}

declare class InsertEdgeLoopCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): InsertEdgeLoopCommand;
	static Find(Outer: UObject, ResourceName: string): InsertEdgeLoopCommand;
	static GetDefaultObject(): InsertEdgeLoopCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InsertEdgeLoopCommand;
	static C(Other: UObject | any): InsertEdgeLoopCommand;
}

declare class QuadrangulateMeshCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): QuadrangulateMeshCommand;
	static Find(Outer: UObject, ResourceName: string): QuadrangulateMeshCommand;
	static GetDefaultObject(): QuadrangulateMeshCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuadrangulateMeshCommand;
	static C(Other: UObject | any): QuadrangulateMeshCommand;
}

declare class RemoveEdgeCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): RemoveEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): RemoveEdgeCommand;
	static GetDefaultObject(): RemoveEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveEdgeCommand;
	static C(Other: UObject | any): RemoveEdgeCommand;
}

declare class RemoveVertexCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): RemoveVertexCommand;
	static Find(Outer: UObject, ResourceName: string): RemoveVertexCommand;
	static GetDefaultObject(): RemoveVertexCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveVertexCommand;
	static C(Other: UObject | any): RemoveVertexCommand;
}

declare class SplitEdgeCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): SplitEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): SplitEdgeCommand;
	static GetDefaultObject(): SplitEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitEdgeCommand;
	static C(Other: UObject | any): SplitEdgeCommand;
}

declare class SplitPolygonCommand extends MeshEditorEditCommand { 
	Component: PrimitiveComponent;
	EditableMesh: EditableMesh;
	static Load(ResourceName: string): SplitPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonCommand;
	static GetDefaultObject(): SplitPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonCommand;
	static C(Other: UObject | any): SplitPolygonCommand;
}

declare class SplitPolygonFromVertexCommand extends SplitPolygonCommand { 
	static Load(ResourceName: string): SplitPolygonFromVertexCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonFromVertexCommand;
	static GetDefaultObject(): SplitPolygonFromVertexCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonFromVertexCommand;
	static C(Other: UObject | any): SplitPolygonFromVertexCommand;
}

declare class SplitPolygonFromEdgeCommand extends SplitPolygonCommand { 
	static Load(ResourceName: string): SplitPolygonFromEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonFromEdgeCommand;
	static GetDefaultObject(): SplitPolygonFromEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonFromEdgeCommand;
	static C(Other: UObject | any): SplitPolygonFromEdgeCommand;
}

declare class SplitPolygonFromPolygonCommand extends SplitPolygonCommand { 
	static Load(ResourceName: string): SplitPolygonFromPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonFromPolygonCommand;
	static GetDefaultObject(): SplitPolygonFromPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonFromPolygonCommand;
	static C(Other: UObject | any): SplitPolygonFromPolygonCommand;
}

declare class TessellatePolygonCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): TessellatePolygonCommand;
	static Find(Outer: UObject, ResourceName: string): TessellatePolygonCommand;
	static GetDefaultObject(): TessellatePolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TessellatePolygonCommand;
	static C(Other: UObject | any): TessellatePolygonCommand;
}

declare class UnifyNormalsCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): UnifyNormalsCommand;
	static Find(Outer: UObject, ResourceName: string): UnifyNormalsCommand;
	static GetDefaultObject(): UnifyNormalsCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnifyNormalsCommand;
	static C(Other: UObject | any): UnifyNormalsCommand;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare type EPropertyValueCategory = 'Generic' | 'RelativeLocation' | 'RelativeRotation' | 'RelativeScale3D' | 'bVisible' | 'Material' | 'EPropertyValueCategory_MAX';
declare var EPropertyValueCategory : { Generic:'Generic',RelativeLocation:'RelativeLocation',RelativeRotation:'RelativeRotation',RelativeScale3D:'RelativeScale3D',bVisible:'bVisible',Material:'Material',EPropertyValueCategory_MAX:'EPropertyValueCategory_MAX', };
declare class PropertyValue extends UObject { 
	FullDisplayString: string;
	bHasRecordedData: boolean;
	bIsObjectProperty: boolean;
	ValueBytes: number[];
	PropCategory: EPropertyValueCategory;
	Properties: Property[];
	PropertyIndices: number[];
	static Load(ResourceName: string): PropertyValue;
	static Find(Outer: UObject, ResourceName: string): PropertyValue;
	static GetDefaultObject(): PropertyValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValue;
	static C(Other: UObject | any): PropertyValue;
}

declare class VariantObjectBinding extends UObject { 
	ObjectPtr: SoftObjectPath;
	LazyObjectPtr: any;
	CapturedProperties: PropertyValue[];
	static Load(ResourceName: string): VariantObjectBinding;
	static Find(Outer: UObject, ResourceName: string): VariantObjectBinding;
	static GetDefaultObject(): VariantObjectBinding;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantObjectBinding;
	static C(Other: UObject | any): VariantObjectBinding;
}

declare class Variant extends UObject { 
	DisplayText: string;
	ObjectBindings: VariantObjectBinding[];
	static Load(ResourceName: string): Variant;
	static Find(Outer: UObject, ResourceName: string): Variant;
	static GetDefaultObject(): Variant;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Variant;
	SwitchOn(): void;
	SetDisplayText(NewDisplayText: string): void;
	GetNumActors(): number;
	GetDisplayText(): string;
	GetActor(ActorIndex: number): Actor;
	static C(Other: UObject | any): Variant;
}

declare class VariantSet extends UObject { 
	DisplayText: string;
	Variants: Variant[];
	static Load(ResourceName: string): VariantSet;
	static Find(Outer: UObject, ResourceName: string): VariantSet;
	static GetDefaultObject(): VariantSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantSet;
	SetDisplayText(NewDisplayText: string): void;
	GetVariant(VariantIndex: number): Variant;
	GetNumVariants(): number;
	GetDisplayText(): string;
	static C(Other: UObject | any): VariantSet;
}

declare class LevelVariantSets extends UObject { 
	VariantSets: VariantSet[];
	DisplayNodeExpansionStates: any;
	static Load(ResourceName: string): LevelVariantSets;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSets;
	static GetDefaultObject(): LevelVariantSets;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSets;
	GetVariantSet(VariantSetIndex: number): VariantSet;
	GetNumVariantSets(): number;
	static C(Other: UObject | any): LevelVariantSets;
}

declare class LevelVariantSetsActor extends Actor { 
	LevelVariantSets: SoftObjectPath;
	static GetDefaultObject(): LevelVariantSetsActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsActor;
	SwitchOnVariantByName(VariantSetName: string,VariantName: string): boolean;
	SwitchOnVariantByIndex(VariantSetIndex: number,VariantIndex: number): boolean;
	SetLevelVariantSets(InVariantSets: LevelVariantSets): void;
	GetLevelVariantSets(bLoad: boolean): LevelVariantSets;
	static C(Other: UObject | any): LevelVariantSetsActor;
}

declare class PropertyValueMaterial extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueMaterial;
	static Find(Outer: UObject, ResourceName: string): PropertyValueMaterial;
	static GetDefaultObject(): PropertyValueMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueMaterial;
	static C(Other: UObject | any): PropertyValueMaterial;
}

declare class PropertyValueTransform extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueTransform;
	static Find(Outer: UObject, ResourceName: string): PropertyValueTransform;
	static GetDefaultObject(): PropertyValueTransform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueTransform;
	static C(Other: UObject | any): PropertyValueTransform;
}

declare class PropertyValueVisibility extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueVisibility;
	static Find(Outer: UObject, ResourceName: string): PropertyValueVisibility;
	static GetDefaultObject(): PropertyValueVisibility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueVisibility;
	static C(Other: UObject | any): PropertyValueVisibility;
}

declare class GeometryCacheTrack extends UObject { 
	Duration: number;
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static GetDefaultObject(): GeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject | any): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	StartFrame: number;
	EndFrame: number;
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static GetDefaultObject(): GeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject | any): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	Duration: number;
	bManualTick: boolean;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	TickAtThisTime(Time: number,bInIsRunning: boolean,bInBackwards: boolean,bInIsLooping: boolean): void;
	Stop(): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	GetPlaybackDirection(): number;
	GetNumberOfFrames(): number;
	GetDuration(): number;
	GetAnimationTime(): number;
	static C(Other: UObject | any): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject | any): GeometryCacheActor;
}

declare class GeometryCacheCodecBase extends UObject { 
	TopologyRanges: number[];
	static Load(ResourceName: string): GeometryCacheCodecBase;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecBase;
	static GetDefaultObject(): GeometryCacheCodecBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecBase;
	static C(Other: UObject | any): GeometryCacheCodecBase;
}

declare class GeometryCacheCodecRaw extends GeometryCacheCodecBase { 
	DummyProperty: number;
	static Load(ResourceName: string): GeometryCacheCodecRaw;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecRaw;
	static GetDefaultObject(): GeometryCacheCodecRaw;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecRaw;
	static C(Other: UObject | any): GeometryCacheCodecRaw;
}

declare class GeometryCacheCodecV1 extends GeometryCacheCodecBase { 
	static Load(ResourceName: string): GeometryCacheCodecV1;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecV1;
	static GetDefaultObject(): GeometryCacheCodecV1;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecV1;
	static C(Other: UObject | any): GeometryCacheCodecV1;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject | any): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: any;
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrackStreamable extends GeometryCacheTrack { 
	Codec: GeometryCacheCodecBase;
	StartSampleTime: number;
	static Load(ResourceName: string): GeometryCacheTrackStreamable;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrackStreamable;
	static GetDefaultObject(): GeometryCacheTrackStreamable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrackStreamable;
	static C(Other: UObject | any): GeometryCacheTrackStreamable;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}

declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: number;
	TimeSteps: number;
	FrameStart: number;
	FrameEnd: number;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'PercentageBased' | 'FixedNumber' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	bGenerateLightmapUVs: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
	bOptimizeIndexBuffers: boolean;
	CompressedPositionPrecision: number;
	CompressedTextureCoordinatesNumberOfBits: number;
	clone() : AbcGeometryCacheSettings;
	static C(Other: UObject | any): AbcGeometryCacheSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare class AppleImageUtilsImageConversionResult { 
	Error: string;
	ImageData: number[];
	clone() : AppleImageUtilsImageConversionResult;
	static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}

declare type ETextureRotationDirection = 'None' | 'Left' | 'Right' | 'Down' | 'ETextureRotationDirection_MAX';
declare var ETextureRotationDirection : { None:'None',Left:'Left',Right:'Right',Down:'Down',ETextureRotationDirection_MAX:'ETextureRotationDirection_MAX', };
declare class AppleImageUtilsBaseAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	ConversionResult: AppleImageUtilsImageConversionResult;
	static Load(ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToTIFF(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToPNG(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToJPEG(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToHEIF(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
}

declare class AppleImageInterface extends Interface { 
	static Load(ResourceName: string): AppleImageInterface;
	static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
	static GetDefaultObject(): AppleImageInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageInterface;
	static C(Other: UObject | any): AppleImageInterface;
}

declare class K2Node_ConvertToJPEG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToJPEG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToJPEG;
	static GetDefaultObject(): K2Node_ConvertToJPEG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToJPEG;
	static C(Other: UObject | any): K2Node_ConvertToJPEG;
}

declare class K2Node_ConvertToHEIF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToHEIF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToHEIF;
	static GetDefaultObject(): K2Node_ConvertToHEIF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToHEIF;
	static C(Other: UObject | any): K2Node_ConvertToHEIF;
}

declare class K2Node_ConvertToTIFF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToTIFF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToTIFF;
	static GetDefaultObject(): K2Node_ConvertToTIFF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToTIFF;
	static C(Other: UObject | any): K2Node_ConvertToTIFF;
}

declare class K2Node_ConvertToPNG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToPNG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToPNG;
	static GetDefaultObject(): K2Node_ConvertToPNG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToPNG;
	static C(Other: UObject | any): K2Node_ConvertToPNG;
}

declare class DetectedFeature { 
	Confidence: number;
	clone() : DetectedFeature;
	static C(Other: UObject | any): DetectedFeature;
}

declare class DetectedFeatureRegion extends DetectedFeature { 
	Points: Vector2D[];
	clone() : DetectedFeatureRegion;
	static C(Other: UObject | any): DetectedFeatureRegion;
}

declare class DetectedFeature2D extends DetectedFeature { 
	BoundingBox: Box2D;
	clone() : DetectedFeature2D;
	static C(Other: UObject | any): DetectedFeature2D;
}

declare type EDetectedFaceFeatureType = 'Unkown' | 'FaceContour' | 'InnerLips' | 'LeftEye' | 'LeftEyebrow' | 'LeftPupil' | 'MedianLine' | 'Nose' | 'NoseCrest' | 'OuterLips' | 'RightEye' | 'RightEyebrow' | 'RightPupil' | 'EDetectedFaceFeatureType_MAX';
declare var EDetectedFaceFeatureType : { Unkown:'Unkown',FaceContour:'FaceContour',InnerLips:'InnerLips',LeftEye:'LeftEye',LeftEyebrow:'LeftEyebrow',LeftPupil:'LeftPupil',MedianLine:'MedianLine',Nose:'Nose',NoseCrest:'NoseCrest',OuterLips:'OuterLips',RightEye:'RightEye',RightEyebrow:'RightEyebrow',RightPupil:'RightPupil',EDetectedFaceFeatureType_MAX:'EDetectedFaceFeatureType_MAX', };
declare class DetectedFaceFeature2D extends DetectedFeature2D { 
	FeatureType: EDetectedFaceFeatureType;
	clone() : DetectedFaceFeature2D;
	static C(Other: UObject | any): DetectedFaceFeature2D;
}

declare class DetectedFaceFeatureRegion extends DetectedFeatureRegion { 
	FeatureType: EDetectedFaceFeatureType;
	clone() : DetectedFaceFeatureRegion;
	static C(Other: UObject | any): DetectedFaceFeatureRegion;
}

declare class DetectedFace extends DetectedFeatureRegion { 
	BoundingBox: Box2D;
	Features: DetectedFaceFeature2D[];
	FeatureRegions: DetectedFaceFeatureRegion[];
	clone() : DetectedFace;
	static C(Other: UObject | any): DetectedFace;
}

declare class FaceDetectionResult { 
	DetectedFaces: DetectedFace[];
	clone() : FaceDetectionResult;
	static C(Other: UObject | any): FaceDetectionResult;
}

declare class AppleVisionDetectFacesAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(FaceDetectionResult: FaceDetectionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(FaceDetectionResult: FaceDetectionResult) => void>;
	FaceDetectionResult: FaceDetectionResult;
	static Load(ResourceName: string): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static CreateProxyObjectForDetectFaces(SourceImage: Texture): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCache: SoftObjectPath;
	StartOffset: number;
	EndOffset: number;
	PlayRate: number;
	bReverse: boolean;
	clone() : MovieSceneGeometryCacheParams;
	static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}

declare class MovieSceneGeometryCacheSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCacheParams;
	static Load(ResourceName: string): MovieSceneGeometryCacheSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheSection;
	static GetDefaultObject(): MovieSceneGeometryCacheSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheSection;
	static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}

declare class MovieSceneGeometryCacheTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheTrack;
	static GetDefaultObject(): MovieSceneGeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheTrack;
	static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}

declare class WebSocketConnection extends NetConnection { 
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static GetDefaultObject(): WebSocketConnection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject | any): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static GetDefaultObject(): WebSocketNetDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject | any): WebSocketNetDriver;
}

declare class AjaCustomTimeStep extends FixedFrameRateCustomTimeStep { 
	bUseReferenceIn: boolean;
	MediaConfiguration: MediaIOConfiguration;
	bWaitForFrameToBeReady: boolean;
	TimecodeFormat: EMediaIOTimecodeFormat;
	bEnableOverrunDetection: boolean;
	InitializedEngine: Engine;
	static Load(ResourceName: string): AjaCustomTimeStep;
	static Find(Outer: UObject, ResourceName: string): AjaCustomTimeStep;
	static GetDefaultObject(): AjaCustomTimeStep;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaCustomTimeStep;
	static C(Other: UObject | any): AjaCustomTimeStep;
}

declare class AjaMediaSettings extends UObject { 
	static Load(ResourceName: string): AjaMediaSettings;
	static Find(Outer: UObject, ResourceName: string): AjaMediaSettings;
	static GetDefaultObject(): AjaMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaMediaSettings;
	static C(Other: UObject | any): AjaMediaSettings;
}

declare type EAjaMediaAudioChannel = 'Channel6' | 'Channel8' | 'EAjaMediaAudioChannel_MAX';
declare var EAjaMediaAudioChannel : { Channel6:'Channel6',Channel8:'Channel8',EAjaMediaAudioChannel_MAX:'EAjaMediaAudioChannel_MAX', };
declare type EAjaMediaSourceColorFormat = 'BGRA' | 'BGR10' | 'EAjaMediaSourceColorFormat_MAX';
declare var EAjaMediaSourceColorFormat : { BGRA:'BGRA',BGR10:'BGR10',EAjaMediaSourceColorFormat_MAX:'EAjaMediaSourceColorFormat_MAX', };
declare class AjaMediaSource extends TimeSynchronizableMediaSource { 
	MediaConfiguration: MediaIOConfiguration;
	TimecodeFormat: EMediaIOTimecodeFormat;
	bCaptureWithAutoCirculating: boolean;
	bCaptureAncillary: boolean;
	MaxNumAncillaryFrameBuffer: number;
	bCaptureAudio: boolean;
	AudioChannel: EAjaMediaAudioChannel;
	MaxNumAudioFrameBuffer: number;
	bCaptureVideo: boolean;
	ColorFormat: EAjaMediaSourceColorFormat;
	MaxNumVideoFrameBuffer: number;
	bLogDropFrame: boolean;
	bEncodeTimecodeInTexel: boolean;
	static Load(ResourceName: string): AjaMediaSource;
	static Find(Outer: UObject, ResourceName: string): AjaMediaSource;
	static GetDefaultObject(): AjaMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaMediaSource;
	static C(Other: UObject | any): AjaMediaSource;
}

declare class AjaMediaTimecodeReference { 
	Device: MediaIODevice;
	LtcIndex: number;
	LtcFrameRate: FrameRate;
	clone() : AjaMediaTimecodeReference;
	static C(Other: UObject | any): AjaMediaTimecodeReference;
}

declare class AjaMediaTimecodeConfiguration { 
	MediaConfiguration: MediaIOConfiguration;
	TimecodeFormat: EMediaIOTimecodeFormat;
	clone() : AjaMediaTimecodeConfiguration;
	static C(Other: UObject | any): AjaMediaTimecodeConfiguration;
}

declare class AjaTimecodeProvider extends TimecodeProvider { 
	bUseReferenceIn: boolean;
	ReferenceConfiguration: AjaMediaTimecodeReference;
	VideoConfiguration: AjaMediaTimecodeConfiguration;
	InitializedEngine: Engine;
	static Load(ResourceName: string): AjaTimecodeProvider;
	static Find(Outer: UObject, ResourceName: string): AjaTimecodeProvider;
	static GetDefaultObject(): AjaTimecodeProvider;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaTimecodeProvider;
	static C(Other: UObject | any): AjaTimecodeProvider;
}

declare class AjaMediaCapture extends MediaCapture { 
	static Load(ResourceName: string): AjaMediaCapture;
	static Find(Outer: UObject, ResourceName: string): AjaMediaCapture;
	static GetDefaultObject(): AjaMediaCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaMediaCapture;
	static C(Other: UObject | any): AjaMediaCapture;
}

declare type EAjaMediaOutputPixelFormat = 'PF_8BIT_ARGB' | 'PF_10BIT_RGB' | 'PF_MAX';
declare var EAjaMediaOutputPixelFormat : { PF_8BIT_ARGB:'PF_8BIT_ARGB',PF_10BIT_RGB:'PF_10BIT_RGB',PF_MAX:'PF_MAX', };
declare class AjaMediaOutput extends MediaOutput { 
	OutputConfiguration: MediaIOOutputConfiguration;
	bOutputWithAutoCirculating: boolean;
	TimecodeFormat: EMediaIOTimecodeFormat;
	PixelFormat: EAjaMediaOutputPixelFormat;
	NumberOfAJABuffers: number;
	bInterlacedFieldsTimecodeNeedToMatch: boolean;
	bWaitForSyncEvent: boolean;
	bEncodeTimecodeInTexel: boolean;
	static Load(ResourceName: string): AjaMediaOutput;
	static Find(Outer: UObject, ResourceName: string): AjaMediaOutput;
	static GetDefaultObject(): AjaMediaOutput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaMediaOutput;
	static C(Other: UObject | any): AjaMediaOutput;
}

declare class AjaFrameGrabberProtocol extends MovieSceneImageCaptureProtocolBase { 
	MediaOutput: SoftObjectPath;
	Information: string;
	TransientMediaOutputPtr: AjaMediaOutput;
	TransientMediaCapturePtr: AjaMediaCapture;
	static Load(ResourceName: string): AjaFrameGrabberProtocol;
	static Find(Outer: UObject, ResourceName: string): AjaFrameGrabberProtocol;
	static GetDefaultObject(): AjaFrameGrabberProtocol;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AjaFrameGrabberProtocol;
	static C(Other: UObject | any): AjaFrameGrabberProtocol;
}

declare class AutoSizeSettings extends UObject { 
	CommentNodePadding: Vector2D;
	bUseRandomColor: boolean;
	DefaultCommentColor: LinearColor;
	bAggressivelyUseDefaultColor: boolean;
	bMoveEmptyCommentBoxes: boolean;
	EmptyCommentBoxSpeed: number;
	bForceColorCommentBubbles: boolean;
	static Load(ResourceName: string): AutoSizeSettings;
	static Find(Outer: UObject, ResourceName: string): AutoSizeSettings;
	static GetDefaultObject(): AutoSizeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutoSizeSettings;
	static C(Other: UObject | any): AutoSizeSettings;
}

declare type EJsonType = 'None' | 'Null' | 'String' | 'Number' | 'Boolean' | 'Array' | 'Object' | 'EJsonType_MAX';
declare var EJsonType : { None:'None',Null:'Null',String:'String',Number:'Number',Boolean:'Boolean',Array:'Array',Object:'Object',EJsonType_MAX:'EJsonType_MAX', };
declare class BlueprintJsonObject { 
	clone() : BlueprintJsonObject;
	static C(Other: UObject | any): BlueprintJsonObject;
	Conv_JsonObjectToJsonValue(FieldName: string): BlueprintJsonValue;
	Conv_JsonObjectToPrettyString(): string;
	Conv_JsonObjectToString(): string;
	JsonHasField(FieldName: string): boolean;
	JsonHasTypedField(FieldName: string,Type: EJsonType): boolean;
	JsonMakeField(FieldName: string,Value: BlueprintJsonValue): BlueprintJsonObject;
	JsonMakeObject(): BlueprintJsonValue;
	JsonRemoveField(FieldName: string): BlueprintJsonObject;
	JsonSetField(FieldName: string,JsonValue: BlueprintJsonValue): BlueprintJsonObject;
	static Conv_JsonObjectToJsonValue(JsonObject: BlueprintJsonObject,FieldName: string): BlueprintJsonValue;
	static Conv_JsonObjectToPrettyString(JsonObject: BlueprintJsonObject): string;
	static Conv_JsonObjectToString(JsonObject: BlueprintJsonObject): string;
	static JsonHasField(JsonObject: BlueprintJsonObject,FieldName: string): boolean;
	static JsonHasTypedField(JsonObject: BlueprintJsonObject,FieldName: string,Type: EJsonType): boolean;
	static JsonMakeField(JsonObject: BlueprintJsonObject,FieldName: string,Value: BlueprintJsonValue): BlueprintJsonObject;
	static JsonMakeObject(Value: BlueprintJsonObject): BlueprintJsonValue;
	static JsonRemoveField(JsonObject: BlueprintJsonObject,FieldName: string): BlueprintJsonObject;
	static JsonSetField(JsonObject: BlueprintJsonObject,FieldName: string,JsonValue: BlueprintJsonValue): BlueprintJsonObject;
	static Conv_StringToJsonObject(JsonString: string): BlueprintJsonObject;
	static JsonMake(): BlueprintJsonObject;
}

declare class BlueprintJsonValue { 
	clone() : BlueprintJsonValue;
	static C(Other: UObject | any): BlueprintJsonValue;
	Conv_JsonValueToArray(): BlueprintJsonValue[];
	Conv_JsonValueToBool(): boolean;
	Conv_JsonValueToFloat(): number;
	Conv_JsonValueToInteger(): number;
	Conv_JsonValueToObject(): BlueprintJsonObject;
	Conv_JsonValueToString(): string;
	EquaEqual_JsonValue(B: BlueprintJsonValue): boolean;
	JsonIsNull(): boolean;
	JsonType(): EJsonType;
	NotEqual_JsonValue(B: BlueprintJsonValue): boolean;
	static Conv_JsonValueToArray(JsonValue: BlueprintJsonValue): BlueprintJsonValue[];
	static Conv_JsonValueToBool(JsonValue: BlueprintJsonValue): boolean;
	static Conv_JsonValueToFloat(JsonValue: BlueprintJsonValue): number;
	static Conv_JsonValueToInteger(JsonValue: BlueprintJsonValue): number;
	static Conv_JsonValueToObject(JsonValue: BlueprintJsonValue): BlueprintJsonObject;
	static Conv_JsonValueToString(JsonValue: BlueprintJsonValue): string;
	static EquaEqual_JsonValue(A: BlueprintJsonValue,B: BlueprintJsonValue): boolean;
	static JsonIsNull(JsonValue: BlueprintJsonValue): boolean;
	static JsonType(JsonValue: BlueprintJsonValue): EJsonType;
	static NotEqual_JsonValue(A: BlueprintJsonValue,B: BlueprintJsonValue): boolean;
	static JsonMakeArray(Value: BlueprintJsonValue[]): BlueprintJsonValue;
	static JsonMakeBool(Value: boolean): BlueprintJsonValue;
	static JsonMakeFloat(Value: number): BlueprintJsonValue;
	static JsonMakeInt(Value: number): BlueprintJsonValue;
	static JsonMakeNull(): BlueprintJsonValue;
	static JsonMakeString(Value: string): BlueprintJsonValue;
}

declare class BlueprintJsonLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): BlueprintJsonLibrary;
	static Find(Outer: UObject, ResourceName: string): BlueprintJsonLibrary;
	static GetDefaultObject(): BlueprintJsonLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlueprintJsonLibrary;
	static NotEqual_JsonValue(A: BlueprintJsonValue,B: BlueprintJsonValue): boolean;
	static JsonType(JsonValue: BlueprintJsonValue): EJsonType;
	static JsonSetField(JsonObject: BlueprintJsonObject,FieldName: string,JsonValue: BlueprintJsonValue): BlueprintJsonObject;
	static JsonRemoveField(JsonObject: BlueprintJsonObject,FieldName: string): BlueprintJsonObject;
	static JsonMakeString(Value: string): BlueprintJsonValue;
	static JsonMakeObject(Value: BlueprintJsonObject): BlueprintJsonValue;
	static JsonMakeNull(): BlueprintJsonValue;
	static JsonMakeInt(Value: number): BlueprintJsonValue;
	static JsonMakeFloat(Value: number): BlueprintJsonValue;
	static JsonMakeField(JsonObject: BlueprintJsonObject,FieldName: string,Value: BlueprintJsonValue): BlueprintJsonObject;
	static JsonMakeBool(Value: boolean): BlueprintJsonValue;
	static JsonMakeArray(Value: BlueprintJsonValue[]): BlueprintJsonValue;
	static JsonMake(): BlueprintJsonObject;
	static JsonIsNull(JsonValue: BlueprintJsonValue): boolean;
	static JsonHasTypedField(JsonObject: BlueprintJsonObject,FieldName: string,Type: EJsonType): boolean;
	static JsonHasField(JsonObject: BlueprintJsonObject,FieldName: string): boolean;
	static EquaEqual_JsonValue(A: BlueprintJsonValue,B: BlueprintJsonValue): boolean;
	static Conv_StringToJsonObject(JsonString: string): BlueprintJsonObject;
	static Conv_JsonValueToString(JsonValue: BlueprintJsonValue): string;
	static Conv_JsonValueToObject(JsonValue: BlueprintJsonValue): BlueprintJsonObject;
	static Conv_JsonValueToInteger(JsonValue: BlueprintJsonValue): number;
	static Conv_JsonValueToFloat(JsonValue: BlueprintJsonValue): number;
	static Conv_JsonValueToBool(JsonValue: BlueprintJsonValue): boolean;
	static Conv_JsonValueToArray(JsonValue: BlueprintJsonValue): BlueprintJsonValue[];
	static Conv_JsonObjectToString(JsonObject: BlueprintJsonObject): string;
	static Conv_JsonObjectToPrettyString(JsonObject: BlueprintJsonObject): string;
	static Conv_JsonObjectToJsonValue(JsonObject: BlueprintJsonObject,FieldName: string): BlueprintJsonValue;
	static C(Other: UObject | any): BlueprintJsonLibrary;
}

declare class CuteCodeEditorSettings extends UObject { 
	QtCreatorPath: FilePath;
	UnrealKitName: string;
	static Load(ResourceName: string): CuteCodeEditorSettings;
	static Find(Outer: UObject, ResourceName: string): CuteCodeEditorSettings;
	static GetDefaultObject(): CuteCodeEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CuteCodeEditorSettings;
	static C(Other: UObject | any): CuteCodeEditorSettings;
}

declare class GraphPanelStyle { 
	GridLineColor: LinearColor;
	GridRuleColor: LinearColor;
	GridCenterColor: LinearColor;
	clone() : GraphPanelStyle;
	static C(Other: UObject | any): GraphPanelStyle;
}

declare class DetailsView { 
	CategoryTop_Hovered: SlateBrush;
	CategoryTop: SlateBrush;
	CategoryMiddle_Highlighted: SlateBrush;
	CategoryMiddle_Hovered: SlateBrush;
	CategoryMiddle: SlateBrush;
	CollapsedCategory_Hovered: SlateBrush;
	CollapsedCategory: SlateBrush;
	CategoryBottom: SlateBrush;
	AdvancedDropdownBorder: SlateBrush;
	clone() : DetailsView;
	static C(Other: UObject | any): DetailsView;
}

declare class UMGEditorPalette { 
	UMGEditor_PaletteHeader: TableRowStyle;
	UMGEditor_PaletteItem: TableRowStyle;
	clone() : UMGEditorPalette;
	static C(Other: UObject | any): UMGEditorPalette;
}

declare class DockTabStyle extends SlateWidgetStyle { 
	CloseButtonStyle: ButtonStyle;
	NormalBrush: SlateBrush;
	ActiveBrush: SlateBrush;
	ColorOverlayTabBrush: SlateBrush;
	ColorOverlayIconBrush: SlateBrush;
	ForegroundBrush: SlateBrush;
	HoveredBrush: SlateBrush;
	ContentAreaBrush: SlateBrush;
	TabWellBrush: SlateBrush;
	TabPadding: Margin;
	OverlapWidth: number;
	FlashColor: SlateColor;
	clone() : DockTabStyle;
	static C(Other: UObject | any): DockTabStyle;
}

declare class PropertyWindow { 
	NormalFont: SlateFontInfo;
	BoldFont: SlateFontInfo;
	ItalicFont: SlateFontInfo;
	clone() : PropertyWindow;
	static C(Other: UObject | any): PropertyWindow;
}

declare class HyperlinkStyle extends SlateWidgetStyle { 
	UnderlineStyle: ButtonStyle;
	TextStyle: TextBlockStyle;
	Padding: Margin;
	clone() : HyperlinkStyle;
	static C(Other: UObject | any): HyperlinkStyle;
}

declare class InlineEditableTextBlockStyle extends SlateWidgetStyle { 
	EditableTextBoxStyle: EditableTextBoxStyle;
	TextStyle: TextBlockStyle;
	clone() : InlineEditableTextBlockStyle;
	static C(Other: UObject | any): InlineEditableTextBlockStyle;
}

declare class ContentBrowserFont { 
	SourceTreeRootItemFont: SlateFontInfo;
	SourceTreeItemFont: SlateFontInfo;
	AssetTileViewNameFontVerySmall: SlateFontInfo;
	AssetTileViewNameFontSmall: SlateFontInfo;
	AssetTileViewNameFont: SlateFontInfo;
	TopBar_Font: TextBlockStyle;
	PathText: TextBlockStyle;
	clone() : ContentBrowserFont;
	static C(Other: UObject | any): ContentBrowserFont;
}

declare class EditorCustomizeSetting extends UObject { 
	EditorUseGrid: boolean;
	Grap_Panel_Background: SlateBrush;
	Graph_Panel: GraphPanelStyle;
	ToolPanel_GroupBorder: SlateBrush;
	ToolPanel_DarkGroupBorder: SlateBrush;
	SCSEditor_TreePanel: SlateBrush;
	SettingsEditor_CheckoutWarningBorder: SlateBrush;
	Docking_Tab_ContentAreaBrush: SlateBrush;
	TableView_DarkRow: TableRowStyle;
	DetailsView: DetailsView;
	PlacementBrowser_Tab: CheckBoxStyle;
	EditorModesToolbar_ToggleButton: CheckBoxStyle;
	E_Toolbar_Background: SlateBrush;
	UMGEditor_Palette: UMGEditorPalette;
	WindowStyle: WindowStyle;
	Docking_MajorTab: DockTabStyle;
	Docking_Tab: DockTabStyle;
	TableView_Header: HeaderRowStyle;
	ToolBar_Background: SlateBrush;
	Menu_Background: SlateBrush;
	NormalText: TextBlockStyle;
	NormalUnderlinedText: TextBlockStyle;
	SmallText: TextBlockStyle;
	SmallUnderlinedText: TextBlockStyle;
	ToolBar_Label: TextBlockStyle;
	Docking_TabFont: TextBlockStyle;
	Menu_Label: TextBlockStyle;
	Menu_Heading: TextBlockStyle;
	PlacementBrowser_Asset_Name: TextBlockStyle;
	PlacementBrowser_Tab_Text: TextBlockStyle;
	PropertyWindow: PropertyWindow;
	DetailsView_CategoryFontStyle: SlateFontInfo;
	Hyperlink: HyperlinkStyle;
	InlineEditableTextBlockStyle: InlineEditableTextBlockStyle;
	SettingsEditor_CatgoryAndSectionFont: SlateFontInfo;
	ContentBrowserFont: ContentBrowserFont;
	static Load(ResourceName: string): EditorCustomizeSetting;
	static Find(Outer: UObject, ResourceName: string): EditorCustomizeSetting;
	static GetDefaultObject(): EditorCustomizeSetting;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorCustomizeSetting;
	static C(Other: UObject | any): EditorCustomizeSetting;
}

declare class FeedbackFile extends UObject { 
	Key: string;
	ProjectString: string;
	ID: Guid;
	Device: string;
	Duration: number;
	static Load(ResourceName: string): FeedbackFile;
	static Find(Outer: UObject, ResourceName: string): FeedbackFile;
	static GetDefaultObject(): FeedbackFile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FeedbackFile;
	static C(Other: UObject | any): FeedbackFile;
}

declare type EPosition = 'All' | 'Left' | 'Right' | 'Vest' | 'Head' | 'Racket' | 'HandL' | 'HandR' | 'FootL' | 'FootR' | 'VestFront' | 'VestBack' | 'GloveLeft' | 'GloveRight' | 'Custom1' | 'Custom2' | 'Custom3' | 'Custom4' | 'EPosition_MAX';
declare var EPosition : { All:'All',Left:'Left',Right:'Right',Vest:'Vest',Head:'Head',Racket:'Racket',HandL:'HandL',HandR:'HandR',FootL:'FootL',FootR:'FootR',VestFront:'VestFront',VestBack:'VestBack',GloveLeft:'GloveLeft',GloveRight:'GloveRight',Custom1:'Custom1',Custom2:'Custom2',Custom3:'Custom3',Custom4:'Custom4',EPosition_MAX:'EPosition_MAX', };
declare class PathPoint { 
	X: number;
	Y: number;
	Intensity: number;
	MotorCount: number;
	clone() : PathPoint;
	static C(Other: UObject | any): PathPoint;
}

declare class RotationOption { 
	OffsetAngleX: number;
	OffsetY: number;
	clone() : RotationOption;
	static C(Other: UObject | any): RotationOption;
}

declare class ScaleOption { 
	Intensity: number;
	Duration: number;
	clone() : ScaleOption;
	static C(Other: UObject | any): ScaleOption;
}

declare class DotPoint { 
	index: number;
	Intensity: number;
	clone() : DotPoint;
	static C(Other: UObject | any): DotPoint;
}

declare class HapticManagerComponent extends ActorComponent { 
	static Load(ResourceName: string): HapticManagerComponent;
	static Find(Outer: UObject, ResourceName: string): HapticManagerComponent;
	static GetDefaultObject(): HapticManagerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HapticManagerComponent;
	TurnOffRegisteredFeedbackFile(Feedback: FeedbackFile): void;
	TurnOffRegisteredFeedback(Key: string): void;
	TurnOffAllFeedback(): void;
	ToggleHapticFeedback(): void;
	SubmitPath(Key: string,PositionEnum: EPosition,PathPoints: PathPoint[],DurationInMilliSecs: number): void;
	SubmitFeedbackWithTransform(Feedback: FeedbackFile,AltKey: string,Option: RotationOption,UseAltKey: boolean): void;
	SubmitFeedbackWithIntensityDuration(Feedback: FeedbackFile,AltKey: string,RotationOption: RotationOption,ScaleOption: ScaleOption,UseAltKey: boolean): void;
	SubmitFeedback(Feedback: FeedbackFile): void;
	SubmitDots(Key: string,PositionEnum: EPosition,DotPoints: DotPoint[],DurationInMilliSecs: number): void;
	SubmitBytes(Key: string,PositionEnum: EPosition,InputBytes: number[],DurationInMilliSecs: number): void;
	RegisterFeedbackFile(Key: string,Feedback: FeedbackFile): void;
	static ProjectToVest(Location: Vector,HitComponent: PrimitiveComponent,HalfHeight: number): RotationOption;
	IsRegisteredPlaying(Key: string): boolean;
	IsRegisteredFilePlaying(Feedback: FeedbackFile): boolean;
	IsDeviceConnected(Device: EPosition): boolean;
	IsAnythingPlaying(): boolean;
	EnableHapticFeedback(): void;
	DisableHapticFeedback(): void;
	static CustomProjectToVest(Location: Vector,HitComponent: PrimitiveComponent,HalfHeight: number,UpVector: Vector,ForwardVector: Vector): RotationOption;
	static C(Other: UObject | any): HapticManagerComponent;
}

declare class HapticsManagerActor extends Actor { 
	static GetDefaultObject(): HapticsManagerActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HapticsManagerActor;
	SetTactSuit(SleeveLeft: SceneComponent,SleeveRight: SceneComponent,head: SceneComponent,VestFront: SceneComponent,VestBack: SceneComponent,GloveLeft: SceneComponent,GloveRight: SceneComponent,ShoeLeft: SceneComponent,ShoeRight: SceneComponent,racket: SceneComponent): void;
	static C(Other: UObject | any): HapticsManagerActor;
}

declare class TactalFeedbackFile extends FeedbackFile { 
	static Load(ResourceName: string): TactalFeedbackFile;
	static Find(Outer: UObject, ResourceName: string): TactalFeedbackFile;
	static GetDefaultObject(): TactalFeedbackFile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TactalFeedbackFile;
	static C(Other: UObject | any): TactalFeedbackFile;
}

declare class TactosyFeedbackFile extends FeedbackFile { 
	static Load(ResourceName: string): TactosyFeedbackFile;
	static Find(Outer: UObject, ResourceName: string): TactosyFeedbackFile;
	static GetDefaultObject(): TactosyFeedbackFile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TactosyFeedbackFile;
	static C(Other: UObject | any): TactosyFeedbackFile;
}

declare class TactotFeedbackFile extends FeedbackFile { 
	static Load(ResourceName: string): TactotFeedbackFile;
	static Find(Outer: UObject, ResourceName: string): TactotFeedbackFile;
	static GetDefaultObject(): TactotFeedbackFile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TactotFeedbackFile;
	static C(Other: UObject | any): TactotFeedbackFile;
}

declare class FeedbackFileFactory extends Factory { 
	static Load(ResourceName: string): FeedbackFileFactory;
	static Find(Outer: UObject, ResourceName: string): FeedbackFileFactory;
	static GetDefaultObject(): FeedbackFileFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FeedbackFileFactory;
	static C(Other: UObject | any): FeedbackFileFactory;
}

declare class FeedbackFileFactoryNew extends Factory { 
	static Load(ResourceName: string): FeedbackFileFactoryNew;
	static Find(Outer: UObject, ResourceName: string): FeedbackFileFactoryNew;
	static GetDefaultObject(): FeedbackFileFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FeedbackFileFactoryNew;
	static C(Other: UObject | any): FeedbackFileFactoryNew;
}

declare class KantanCartesianDatapoint { 
	Coords: Vector2D;
	clone() : KantanCartesianDatapoint;
	static C(Other: UObject | any): KantanCartesianDatapoint;
}

declare class KantanCartesianDatasourceInterface extends Interface { 
	static Load(ResourceName: string): KantanCartesianDatasourceInterface;
	static Find(Outer: UObject, ResourceName: string): KantanCartesianDatasourceInterface;
	static GetDefaultObject(): KantanCartesianDatasourceInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCartesianDatasourceInterface;
	GetSeriesName(SeriesIdx: number): string;
	GetSeriesId(CatIdx: number): string;
	GetSeriesDatapoints(SeriesIdx: number): KantanCartesianDatapoint[];
	GetNumSeries(): number;
	static C(Other: UObject | any): KantanCartesianDatasourceInterface;
}

declare class KantanCategoryDatasourceInterface extends Interface { 
	static Load(ResourceName: string): KantanCategoryDatasourceInterface;
	static Find(Outer: UObject, ResourceName: string): KantanCategoryDatasourceInterface;
	static GetDefaultObject(): KantanCategoryDatasourceInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCategoryDatasourceInterface;
	GetNumCategories(): number;
	GetCategoryValue(CatIdx: number): number;
	GetCategoryName(CatIdx: number): string;
	GetCategoryId(CatIdx: number): string;
	static C(Other: UObject | any): KantanCategoryDatasourceInterface;
}

declare class KantanSimpleCartesianDatasource extends UObject { 
	static Load(ResourceName: string): KantanSimpleCartesianDatasource;
	static Find(Outer: UObject, ResourceName: string): KantanSimpleCartesianDatasource;
	static GetDefaultObject(): KantanSimpleCartesianDatasource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanSimpleCartesianDatasource;
	static NewSimpleCartesianDatasource(): KantanSimpleCartesianDatasource;
	BP_RemoveSeries(ID: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveAllSeries(): void;
	BP_AddSeriesWithId(ID: string,Name: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_AddSeries(Name: string,SeriesId?: string): {SeriesId: string};
	BP_AddDatapoint(SeriesId: string,Point: Vector2D,bSuccess?: boolean): {bSuccess: boolean};
	static C(Other: UObject | any): KantanSimpleCartesianDatasource;
}

declare class KantanSimpleCategoryDatasource extends UObject { 
	static Load(ResourceName: string): KantanSimpleCategoryDatasource;
	static Find(Outer: UObject, ResourceName: string): KantanSimpleCategoryDatasource;
	static GetDefaultObject(): KantanSimpleCategoryDatasource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanSimpleCategoryDatasource;
	static NewSimpleCategoryDatasource(): KantanSimpleCategoryDatasource;
	BP_UpdateCategoryValue(ID: string,Value: number,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveCategory(ID: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveAllCategories(): void;
	BP_AddCategoryWithId(ID: string,Name: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_AddCategory(Name: string,CatId?: string): {CatId: string};
	static C(Other: UObject | any): KantanSimpleCategoryDatasource;
}

declare class KantanChartStyle extends SlateWidgetStyle { 
	Background: SlateBrush;
	ChartLineColor: LinearColor;
	ChartLineThickness: number;
	BaseFont: SlateFontInfo;
	TitleFontSize: number;
	AxisDescriptionFontSize: number;
	AxisValueFontSize: number;
	FontColor: LinearColor;
	clone() : KantanChartStyle;
	static C(Other: UObject | any): KantanChartStyle;
}

declare class KantanBarChartStyle extends KantanChartStyle { 
	BarOpacity: number;
	BarOutlineOpacity: number;
	BarOutlineThickness: number;
	clone() : KantanBarChartStyle;
	static C(Other: UObject | any): KantanBarChartStyle;
}

declare class KantanBarChartWidgetStyle extends SlateWidgetStyleContainerBase { 
	ChartStyle: KantanBarChartStyle;
	static Load(ResourceName: string): KantanBarChartWidgetStyle;
	static Find(Outer: UObject, ResourceName: string): KantanBarChartWidgetStyle;
	static GetDefaultObject(): KantanBarChartWidgetStyle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanBarChartWidgetStyle;
	static C(Other: UObject | any): KantanBarChartWidgetStyle;
}

declare class KantanCartesianChartStyle extends KantanChartStyle { 
	DataOpacity: number;
	DataLineThickness: number;
	clone() : KantanCartesianChartStyle;
	static C(Other: UObject | any): KantanCartesianChartStyle;
}

declare class KantanCartesianChartWidgetStyle extends SlateWidgetStyleContainerBase { 
	ChartStyle: KantanCartesianChartStyle;
	static Load(ResourceName: string): KantanCartesianChartWidgetStyle;
	static Find(Outer: UObject, ResourceName: string): KantanCartesianChartWidgetStyle;
	static GetDefaultObject(): KantanCartesianChartWidgetStyle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCartesianChartWidgetStyle;
	static C(Other: UObject | any): KantanCartesianChartWidgetStyle;
}

declare class KantanCategoryStyle { 
	CategoryStyleId: string;
	Color: LinearColor;
	clone() : KantanCategoryStyle;
	static C(Other: UObject | any): KantanCategoryStyle;
}

declare class KantanCategoryStyleSet extends DataAsset { 
	Styles: KantanCategoryStyle[];
	static Load(ResourceName: string): KantanCategoryStyleSet;
	static Find(Outer: UObject, ResourceName: string): KantanCategoryStyleSet;
	static GetDefaultObject(): KantanCategoryStyleSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCategoryStyleSet;
	static C(Other: UObject | any): KantanCategoryStyleSet;
}

declare class KantanPointStyle extends DataAsset { 
	DataPointTexture: Texture2D;
	PointSizeTextureOffsets: IntPoint;
	static Load(ResourceName: string): KantanPointStyle;
	static Find(Outer: UObject, ResourceName: string): KantanPointStyle;
	static GetDefaultObject(): KantanPointStyle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanPointStyle;
	static C(Other: UObject | any): KantanPointStyle;
}

declare class KantanSeriesStyle { 
	StyleId: string;
	PointStyle: KantanPointStyle;
	Color: LinearColor;
	clone() : KantanSeriesStyle;
	static C(Other: UObject | any): KantanSeriesStyle;
}

declare class KantanSeriesStyleSet extends DataAsset { 
	Styles: KantanSeriesStyle[];
	static Load(ResourceName: string): KantanSeriesStyleSet;
	static Find(Outer: UObject, ResourceName: string): KantanSeriesStyleSet;
	static GetDefaultObject(): KantanSeriesStyleSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanSeriesStyleSet;
	static C(Other: UObject | any): KantanSeriesStyleSet;
}

declare class KantanChart extends Widget { 
	Margins: Margin;
	ChartTitle: string;
	TitlePadding: Margin;
	UpdateTickRate: number;
	bShowDataPreview: boolean;
	static Load(ResourceName: string): KantanChart;
	static Find(Outer: UObject, ResourceName: string): KantanChart;
	static GetDefaultObject(): KantanChart;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanChart;
	SetUpdateTickRate(InRate: number): void;
	SetMargins(InMargins: Margin): void;
	SetChartTitlePadding(InPadding: Margin): void;
	SetChartTitle(InTitle: string): void;
	static C(Other: UObject | any): KantanChart;
}

declare class CategoryStyleManualMapping { 
	CategoryId: string;
	Style: KantanCategoryStyle;
	clone() : CategoryStyleManualMapping;
	static C(Other: UObject | any): CategoryStyleManualMapping;
}

declare class KantanCategoryChart extends KantanChart { 
	bAutoPerCategoryStyles: boolean;
	CategoryStyleSet: KantanCategoryStyleSet;
	ManualStyleMappings: CategoryStyleManualMapping[];
	static Load(ResourceName: string): KantanCategoryChart;
	static Find(Outer: UObject, ResourceName: string): KantanCategoryChart;
	static GetDefaultObject(): KantanCategoryChart;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCategoryChart;
	AddCategoryStyleOverride(CategoryId: string,Color: LinearColor): void;
	static C(Other: UObject | any): KantanCategoryChart;
}

declare type EKantanBarChartOrientation = 'Vertical' | 'Horizontal' | 'EKantanBarChartOrientation_MAX';
declare var EKantanBarChartOrientation : { Vertical:'Vertical',Horizontal:'Horizontal',EKantanBarChartOrientation_MAX:'EKantanBarChartOrientation_MAX', };
declare type EKantanBarLabelPosition = 'NoLabels' | 'Standard' | 'Overlaid' | 'EKantanBarLabelPosition_MAX';
declare var EKantanBarLabelPosition : { NoLabels:'NoLabels',Standard:'Standard',Overlaid:'Overlaid',EKantanBarLabelPosition_MAX:'EKantanBarLabelPosition_MAX', };
declare type EKantanBarValueExtents = 'NoValueLines' | 'ZeroLineOnly' | 'ZeroAndMaxLines' | 'EKantanBarValueExtents_MAX';
declare var EKantanBarValueExtents : { NoValueLines:'NoValueLines',ZeroLineOnly:'ZeroLineOnly',ZeroAndMaxLines:'ZeroAndMaxLines',EKantanBarValueExtents_MAX:'EKantanBarValueExtents_MAX', };
declare class CartesianAxisInstanceConfig { 
	bEnabled: boolean;
	bShowTitle: boolean;
	bShowMarkers: boolean;
	bShowLabels: boolean;
	clone() : CartesianAxisInstanceConfig;
	static C(Other: UObject | any): CartesianAxisInstanceConfig;
}

declare class CartesianAxisConfig { 
	Title: string;
	Unit: string;
	MarkerSpacing: number;
	MaxValueDigits: number;
	LeftBottomAxis: CartesianAxisInstanceConfig;
	RightTopAxis: CartesianAxisInstanceConfig;
	FloatingAxis: CartesianAxisInstanceConfig;
	clone() : CartesianAxisConfig;
	static C(Other: UObject | any): CartesianAxisConfig;
}

declare class KantanBarChartBase extends KantanCategoryChart { 
	WidgetStyle: KantanBarChartStyle;
	Orientation: EKantanBarChartOrientation;
	MaxBarValue: number;
	LabelPosition: EKantanBarLabelPosition;
	BarToGapRatio: number;
	ValueExtentsDisplay: EKantanBarValueExtents;
	ValueAxisCfg: CartesianAxisConfig;
	static Load(ResourceName: string): KantanBarChartBase;
	static Find(Outer: UObject, ResourceName: string): KantanBarChartBase;
	static GetDefaultObject(): KantanBarChartBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanBarChartBase;
	SetValueAxisConfig(InCfg: CartesianAxisConfig): void;
	SetOrientation(InOrientation: EKantanBarChartOrientation): void;
	SetMaxBarValue(InMaxValue: number): void;
	SetLabelPosition(InPosition: EKantanBarLabelPosition): void;
	SetExtentsDisplay(InExtents: EKantanBarValueExtents): void;
	SetBarToGapRatio(InRatio: number): void;
	static C(Other: UObject | any): KantanBarChartBase;
}

declare class BarChart extends KantanBarChartBase { 
	DataSource: UObject;
	static Load(ResourceName: string): BarChart;
	static Find(Outer: UObject, ResourceName: string): BarChart;
	static GetDefaultObject(): BarChart;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BarChart;
	SetDatasource(InDatasource: UObject): boolean;
	static C(Other: UObject | any): BarChart;
}

declare type ECartesianScalingType = 'FixedScale' | 'FixedRange' | 'ECartesianScalingType_MAX';
declare var ECartesianScalingType : { FixedScale:'FixedScale',FixedRange:'FixedRange',ECartesianScalingType_MAX:'ECartesianScalingType_MAX', };
declare class CartesianAxisRange { 
	Min: number;
	Max: number;
	clone() : CartesianAxisRange;
	static C(Other: UObject | any): CartesianAxisRange;
}

declare class KantanCartesianPlotScale { 
	Type: ECartesianScalingType;
	Scale: Vector2D;
	FocalCoordinates: Vector2D;
	RangeX: CartesianAxisRange;
	RangeY: CartesianAxisRange;
	clone() : KantanCartesianPlotScale;
	static C(Other: UObject | any): KantanCartesianPlotScale;
}

declare type EKantanDataPointSize = 'Small' | 'Medium' | 'Large' | 'EKantanDataPointSize_MAX';
declare var EKantanDataPointSize : { Small:'Small',Medium:'Medium',Large:'Large',EKantanDataPointSize_MAX:'EKantanDataPointSize_MAX', };
declare class SeriesStyleManualMapping { 
	SeriesId: string;
	Style: KantanSeriesStyle;
	clone() : SeriesStyleManualMapping;
	static C(Other: UObject | any): SeriesStyleManualMapping;
}

declare class KantanCartesianChartBase extends KantanChart { 
	WidgetStyle: KantanCartesianChartStyle;
	PlotScale: KantanCartesianPlotScale;
	DataPointSize: EKantanDataPointSize;
	XAxisCfg: CartesianAxisConfig;
	YAxisCfg: CartesianAxisConfig;
	AxisTitlePadding: Margin;
	SeriesStyleSet: KantanSeriesStyleSet;
	ManualStyleMappings: SeriesStyleManualMapping[];
	bAntiAlias: boolean;
	static Load(ResourceName: string): KantanCartesianChartBase;
	static Find(Outer: UObject, ResourceName: string): KantanCartesianChartBase;
	static GetDefaultObject(): KantanCartesianChartBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCartesianChartBase;
	SetYAxisConfig(InCfg: CartesianAxisConfig): void;
	SetXAxisConfig(InCfg: CartesianAxisConfig): void;
	SetPlotScaleByRange(InRangeX: CartesianAxisRange,InRangeY: CartesianAxisRange): void;
	SetPlotScale(InScale: Vector2D,InFocalCoords: Vector2D): void;
	SetDataPointSize(InSize: EKantanDataPointSize): void;
	SetAxisTitlePadding(InPadding: Margin): void;
	EnableSeries(ID: string,bEnable: boolean): void;
	ConfigureSeries(ID: string,bDrawPoints: boolean,bDrawLines: boolean): void;
	AddSeriesStyleOverride(SeriesId: string,PointStyle: KantanPointStyle,Color: LinearColor): void;
	static C(Other: UObject | any): KantanCartesianChartBase;
}

declare class KantanCartesianPlotBase extends KantanCartesianChartBase { 
	static Load(ResourceName: string): KantanCartesianPlotBase;
	static Find(Outer: UObject, ResourceName: string): KantanCartesianPlotBase;
	static GetDefaultObject(): KantanCartesianPlotBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanCartesianPlotBase;
	static C(Other: UObject | any): KantanCartesianPlotBase;
}

declare class CartesianPlot extends KantanCartesianPlotBase { 
	DataSource: UObject;
	static Load(ResourceName: string): CartesianPlot;
	static Find(Outer: UObject, ResourceName: string): CartesianPlot;
	static GetDefaultObject(): CartesianPlot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CartesianPlot;
	SetDatasource(InDatasource: UObject): boolean;
	static C(Other: UObject | any): CartesianPlot;
}

declare class KantanChartLegend extends Widget { 
	Margins: Margin;
	SeriesPadding: Margin;
	Background: SlateBrush;
	FontSize: number;
	Chart: any;
	static Load(ResourceName: string): KantanChartLegend;
	static Find(Outer: UObject, ResourceName: string): KantanChartLegend;
	static GetDefaultObject(): KantanChartLegend;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanChartLegend;
	SetSeriesPadding(InPadding: Margin): void;
	SetMargins(InMargins: Margin): void;
	SetFontSize(InFontSize: number): void;
	SetChart(InChart: KantanCartesianChartBase): void;
	SetBackground(InBrush: SlateBrush): void;
	static C(Other: UObject | any): KantanChartLegend;
}

declare type ECartesianRangeBoundType = 'FixedValue' | 'FitToData' | 'FitToDataRounded' | 'ECartesianRangeBoundType_MAX';
declare var ECartesianRangeBoundType : { FixedValue:'FixedValue',FitToData:'FitToData',FitToDataRounded:'FitToDataRounded',ECartesianRangeBoundType_MAX:'ECartesianRangeBoundType_MAX', };
declare class CartesianRangeBound { 
	Type: ECartesianRangeBoundType;
	FixedBoundValue: number;
	clone() : CartesianRangeBound;
	static C(Other: UObject | any): CartesianRangeBound;
}

declare class KantanTimeSeriesPlotBase extends KantanCartesianChartBase { 
	bUseFixedTimeRange: boolean;
	DisplayTimeRange: number;
	LowerTimeBound: CartesianRangeBound;
	UpperTimeBound: CartesianRangeBound;
	LowerValueBound: CartesianRangeBound;
	UpperValueBound: CartesianRangeBound;
	static Load(ResourceName: string): KantanTimeSeriesPlotBase;
	static Find(Outer: UObject, ResourceName: string): KantanTimeSeriesPlotBase;
	static GetDefaultObject(): KantanTimeSeriesPlotBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanTimeSeriesPlotBase;
	static C(Other: UObject | any): KantanTimeSeriesPlotBase;
}

declare class SimpleBarChart extends KantanBarChartBase { 
	static Load(ResourceName: string): SimpleBarChart;
	static Find(Outer: UObject, ResourceName: string): SimpleBarChart;
	static GetDefaultObject(): SimpleBarChart;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleBarChart;
	BP_UpdateCategoryValue(ID: string,Value: number,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveCategory(ID: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveAllCategories(): void;
	BP_AddCategoryWithId(ID: string,Name: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_AddCategory(Name: string,CatId?: string): {CatId: string};
	static C(Other: UObject | any): SimpleBarChart;
}

declare class SimpleCartesianPlot extends KantanCartesianPlotBase { 
	static Load(ResourceName: string): SimpleCartesianPlot;
	static Find(Outer: UObject, ResourceName: string): SimpleCartesianPlot;
	static GetDefaultObject(): SimpleCartesianPlot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleCartesianPlot;
	BP_RemoveSeries(ID: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveAllSeries(): void;
	BP_AddSeriesWithId(bSuccess?: boolean,ID?: string,Name?: string,bEnabled?: boolean,bShowPoints?: boolean,bShowLines?: boolean): {bSuccess: boolean};
	BP_AddSeries(SeriesId?: string,Name?: string,bEnabled?: boolean,bShowPoints?: boolean,bShowLines?: boolean): {SeriesId: string};
	BP_AddDatapoint(SeriesId: string,Point: Vector2D,bSuccess?: boolean): {bSuccess: boolean};
	static C(Other: UObject | any): SimpleCartesianPlot;
}

declare class SimpleTimeSeriesPlot extends KantanTimeSeriesPlotBase { 
	static Load(ResourceName: string): SimpleTimeSeriesPlot;
	static Find(Outer: UObject, ResourceName: string): SimpleTimeSeriesPlot;
	static GetDefaultObject(): SimpleTimeSeriesPlot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleTimeSeriesPlot;
	BP_RemoveSeries(ID: string,bSuccess?: boolean): {bSuccess: boolean};
	BP_RemoveAllSeries(): void;
	BP_AddSeriesWithId(bSuccess?: boolean,ID?: string,Name?: string,bEnabled?: boolean,bShowPoints?: boolean,bShowLines?: boolean): {bSuccess: boolean};
	BP_AddSeries(SeriesId?: string,Name?: string,bEnabled?: boolean,bShowPoints?: boolean,bShowLines?: boolean): {SeriesId: string};
	BP_AddDatapointNow(SeriesId: string,Value: number,bSuccess?: boolean): {bSuccess: boolean};
	BP_AddDatapoint(SeriesId: string,Point: Vector2D,bSuccess?: boolean): {bSuccess: boolean};
	static C(Other: UObject | any): SimpleTimeSeriesPlot;
}

declare class TimeSeriesPlot extends KantanTimeSeriesPlotBase { 
	DataSource: UObject;
	static Load(ResourceName: string): TimeSeriesPlot;
	static Find(Outer: UObject, ResourceName: string): TimeSeriesPlot;
	static GetDefaultObject(): TimeSeriesPlot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TimeSeriesPlot;
	SetDatasource(InDatasource: UObject): boolean;
	static C(Other: UObject | any): TimeSeriesPlot;
}

declare class KantanSimpleCartesianDatasourceFactory extends Factory { 
	static Load(ResourceName: string): KantanSimpleCartesianDatasourceFactory;
	static Find(Outer: UObject, ResourceName: string): KantanSimpleCartesianDatasourceFactory;
	static GetDefaultObject(): KantanSimpleCartesianDatasourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanSimpleCartesianDatasourceFactory;
	static C(Other: UObject | any): KantanSimpleCartesianDatasourceFactory;
}

declare class KantanSimpleCategoryDatasourceFactory extends Factory { 
	static Load(ResourceName: string): KantanSimpleCategoryDatasourceFactory;
	static Find(Outer: UObject, ResourceName: string): KantanSimpleCategoryDatasourceFactory;
	static GetDefaultObject(): KantanSimpleCategoryDatasourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KantanSimpleCategoryDatasourceFactory;
	static C(Other: UObject | any): KantanSimpleCategoryDatasourceFactory;
}

declare class KCKantanInfoAssetBase extends UObject { 
	static Load(ResourceName: string): KCKantanInfoAssetBase;
	static Find(Outer: UObject, ResourceName: string): KCKantanInfoAssetBase;
	static GetDefaultObject(): KCKantanInfoAssetBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KCKantanInfoAssetBase;
	static C(Other: UObject | any): KCKantanInfoAssetBase;
}

declare class KCKantanInfoAsset extends KCKantanInfoAssetBase { 
	static Load(ResourceName: string): KCKantanInfoAsset;
	static Find(Outer: UObject, ResourceName: string): KCKantanInfoAsset;
	static GetDefaultObject(): KCKantanInfoAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KCKantanInfoAsset;
	static C(Other: UObject | any): KCKantanInfoAsset;
}

declare class KCKantanDocsAsset extends KCKantanInfoAssetBase { 
	static Load(ResourceName: string): KCKantanDocsAsset;
	static Find(Outer: UObject, ResourceName: string): KCKantanDocsAsset;
	static GetDefaultObject(): KCKantanDocsAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KCKantanDocsAsset;
	static C(Other: UObject | any): KCKantanDocsAsset;
}

declare class K2Node_LowEntry_CreateBitDataWriter extends K2Node { 
	NumInputs: number;
	static Load(ResourceName: string): K2Node_LowEntry_CreateBitDataWriter;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_CreateBitDataWriter;
	static GetDefaultObject(): K2Node_LowEntry_CreateBitDataWriter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_CreateBitDataWriter;
	static C(Other: UObject | any): K2Node_LowEntry_CreateBitDataWriter;
}

declare class K2Node_LowEntry_CreateBitDataWriterPure extends K2Node { 
	NumInputs: number;
	static Load(ResourceName: string): K2Node_LowEntry_CreateBitDataWriterPure;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_CreateBitDataWriterPure;
	static GetDefaultObject(): K2Node_LowEntry_CreateBitDataWriterPure;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_CreateBitDataWriterPure;
	static C(Other: UObject | any): K2Node_LowEntry_CreateBitDataWriterPure;
}

declare class K2Node_LowEntry_CreateByteDataWriter extends K2Node { 
	NumInputs: number;
	static Load(ResourceName: string): K2Node_LowEntry_CreateByteDataWriter;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_CreateByteDataWriter;
	static GetDefaultObject(): K2Node_LowEntry_CreateByteDataWriter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_CreateByteDataWriter;
	static C(Other: UObject | any): K2Node_LowEntry_CreateByteDataWriter;
}

declare class K2Node_LowEntry_CreateByteDataWriterPure extends K2Node { 
	NumInputs: number;
	static Load(ResourceName: string): K2Node_LowEntry_CreateByteDataWriterPure;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_CreateByteDataWriterPure;
	static GetDefaultObject(): K2Node_LowEntry_CreateByteDataWriterPure;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_CreateByteDataWriterPure;
	static C(Other: UObject | any): K2Node_LowEntry_CreateByteDataWriterPure;
}

declare class K2Node_LowEntry_LocalVariable extends K2Node { 
	static Load(ResourceName: string): K2Node_LowEntry_LocalVariable;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_LocalVariable;
	static GetDefaultObject(): K2Node_LowEntry_LocalVariable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_LocalVariable;
	static C(Other: UObject | any): K2Node_LowEntry_LocalVariable;
}

declare class K2Node_LowEntry_MergeBytesPure extends K2Node { 
	NumInputs: number;
	static Load(ResourceName: string): K2Node_LowEntry_MergeBytesPure;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_MergeBytesPure;
	static GetDefaultObject(): K2Node_LowEntry_MergeBytesPure;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_MergeBytesPure;
	static C(Other: UObject | any): K2Node_LowEntry_MergeBytesPure;
}

declare class K2Node_LowEntry_PurePrint extends K2Node { 
	static Load(ResourceName: string): K2Node_LowEntry_PurePrint;
	static Find(Outer: UObject, ResourceName: string): K2Node_LowEntry_PurePrint;
	static GetDefaultObject(): K2Node_LowEntry_PurePrint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LowEntry_PurePrint;
	static C(Other: UObject | any): K2Node_LowEntry_PurePrint;
}

declare class MidiAsset extends UObject { 
	Data: number[];
	static Load(ResourceName: string): MidiAsset;
	static Find(Outer: UObject, ResourceName: string): MidiAsset;
	static GetDefaultObject(): MidiAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiAsset;
	static C(Other: UObject | any): MidiAsset;
}

declare type EMidiTypeEnum = 'MTE_NOTE_OFF' | 'MTE_NOTE' | 'MTE_NOTE_AFTERTOUCH' | 'MTE_CONTROLLER' | 'MTE_PROGRAM_CHANGE' | 'MTE_CHANNEL_AFTERTOUCH' | 'MTE_PITCH_BEND' | 'MTE_MAX';
declare var EMidiTypeEnum : { MTE_NOTE_OFF:'MTE_NOTE_OFF',MTE_NOTE:'MTE_NOTE',MTE_NOTE_AFTERTOUCH:'MTE_NOTE_AFTERTOUCH',MTE_CONTROLLER:'MTE_CONTROLLER',MTE_PROGRAM_CHANGE:'MTE_PROGRAM_CHANGE',MTE_CHANNEL_AFTERTOUCH:'MTE_CHANNEL_AFTERTOUCH',MTE_PITCH_BEND:'MTE_PITCH_BEND',MTE_MAX:'MTE_MAX', };
declare class MidiEvent { 
	Type: EMidiTypeEnum;
	Channel: number;
	Data1: number;
	Data2: number;
	clone() : MidiEvent;
	static C(Other: UObject | any): MidiEvent;
	SendMidiEvent(): void;
	static SendMidiEvent(Event: MidiEvent): void;
}

declare type EMidiTextTypeEnum = 'MMTE_TEXT_EVENT' | 'MMTE_COPYRIGHT_NOTICE' | 'MMTE_TRACK_NAME' | 'MMTE_INSTRUMENT_NAME' | 'MMTE_LYRICS' | 'MMTE_MARKER' | 'MMTE_CUE_POINT' | 'MMTE_MAX';
declare var EMidiTextTypeEnum : { MMTE_TEXT_EVENT:'MMTE_TEXT_EVENT',MMTE_COPYRIGHT_NOTICE:'MMTE_COPYRIGHT_NOTICE',MMTE_TRACK_NAME:'MMTE_TRACK_NAME',MMTE_INSTRUMENT_NAME:'MMTE_INSTRUMENT_NAME',MMTE_LYRICS:'MMTE_LYRICS',MMTE_MARKER:'MMTE_MARKER',MMTE_CUE_POINT:'MMTE_CUE_POINT',MMTE_MAX:'MMTE_MAX', };
declare class MidiComponent extends ActorComponent { 
	PlaySpeed: number;
	SimplifyNote: boolean;
	OnStart: UnrealEngineMulticastDelegate<(beginning: boolean) => void>;
	OnStop: UnrealEngineMulticastDelegate<(Finished: boolean) => void>;
	OnMidiEvent: UnrealEngineMulticastDelegate<(Event: MidiEvent, Time: number, TrackID: number) => void>;
	OnSysExEvent: UnrealEngineMulticastDelegate<(Data: number[], Time: number, TrackID: number) => void>;
	OnTextEvent: UnrealEngineMulticastDelegate<(Type: EMidiTextTypeEnum, text: string, Time: number, TrackID: number) => void>;
	OnMetronomeTick: UnrealEngineMulticastDelegate<(beatNumber: number, measure: number, Time: number) => void>;
	static Load(ResourceName: string): MidiComponent;
	static Find(Outer: UObject, ResourceName: string): MidiComponent;
	static GetDefaultObject(): MidiComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiComponent;
	stop(): void;
	start(Background: boolean,UseGameTime: boolean): void;
	reset(): void;
	LoadMML(Sheet: string): void;
	LoadFile(Path: string): void;
	LoadAsset(MidiAsset: MidiAsset): void;
	isStarted(): boolean;
	isRunning(): boolean;
	GetResolution(): number;
	GetDuration(): number;
	static C(Other: UObject | any): MidiComponent;
}

declare type ENoteEnum = 'NE_C' | 'NE_CS' | 'NE_D' | 'NE_DS' | 'NE_E' | 'NE_F' | 'NE_FS' | 'NE_G' | 'NE_GS' | 'NE_A' | 'NE_AS' | 'NE_B' | 'NE_MAX';
declare var ENoteEnum : { NE_C:'NE_C',NE_CS:'NE_CS',NE_D:'NE_D',NE_DS:'NE_DS',NE_E:'NE_E',NE_F:'NE_F',NE_FS:'NE_FS',NE_G:'NE_G',NE_GS:'NE_GS',NE_A:'NE_A',NE_AS:'NE_AS',NE_B:'NE_B',NE_MAX:'NE_MAX', };
declare class MidiUtils extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MidiUtils;
	static Find(Outer: UObject, ResourceName: string): MidiUtils;
	static GetDefaultObject(): MidiUtils;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiUtils;
	static NoteToFrequency(Note: number): number;
	static NoteToChord(Note: number): ENoteEnum;
	static GetPitchBendAmount(Data1: number,Data2: number): number;
	static FrequencyToNote(Frequency: number): number;
	static DefaultNoteToFrequency(Note: ENoteEnum): number;
	static ConvertPitchBendAmount(Amount: number,Data1?: number,Data2?: number): {Data1: number, Data2: number};
	static C(Other: UObject | any): MidiUtils;
}

declare class MidiAssetFactory extends Factory { 
	static Load(ResourceName: string): MidiAssetFactory;
	static Find(Outer: UObject, ResourceName: string): MidiAssetFactory;
	static GetDefaultObject(): MidiAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiAssetFactory;
	static C(Other: UObject | any): MidiAssetFactory;
}

declare class MidiAssetFactoryNew extends Factory { 
	static Load(ResourceName: string): MidiAssetFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MidiAssetFactoryNew;
	static GetDefaultObject(): MidiAssetFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiAssetFactoryNew;
	static C(Other: UObject | any): MidiAssetFactoryNew;
}

declare type EMidiClockTypeEnum = 'MCTE_QUARTER_FRAME' | 'MCTE_SONG_POSITION' | 'MCTE_SONG_SELECT' | 'MCTE_TUNE_REQUEST' | 'MCTE_CLOCK' | 'MCTE_START' | 'MCTE_CONTINUE' | 'MCTE_STOP' | 'MCTE_ACTIVE' | 'MCTE_RESET' | 'MCTE_MAX';
declare var EMidiClockTypeEnum : { MCTE_QUARTER_FRAME:'MCTE_QUARTER_FRAME',MCTE_SONG_POSITION:'MCTE_SONG_POSITION',MCTE_SONG_SELECT:'MCTE_SONG_SELECT',MCTE_TUNE_REQUEST:'MCTE_TUNE_REQUEST',MCTE_CLOCK:'MCTE_CLOCK',MCTE_START:'MCTE_START',MCTE_CONTINUE:'MCTE_CONTINUE',MCTE_STOP:'MCTE_STOP',MCTE_ACTIVE:'MCTE_ACTIVE',MCTE_RESET:'MCTE_RESET',MCTE_MAX:'MCTE_MAX', };
declare class MidiClockEvent { 
	Type: EMidiClockTypeEnum;
	Data: number;
	clone() : MidiClockEvent;
	static C(Other: UObject | any): MidiClockEvent;
}

declare class MidiInterfaceComponent extends ActorComponent { 
	OnReceiveEvent: UnrealEngineMulticastDelegate<(Event: MidiEvent, DeltaTime: number) => void>;
	OnReceiveSysExEvent: UnrealEngineMulticastDelegate<(Data: number[], DeltaTime: number) => void>;
	OnReceiveClockEvent: UnrealEngineMulticastDelegate<(Event: MidiClockEvent, DeltaTime: number) => void>;
	static Load(ResourceName: string): MidiInterfaceComponent;
	static Find(Outer: UObject, ResourceName: string): MidiInterfaceComponent;
	static GetDefaultObject(): MidiInterfaceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiInterfaceComponent;
	SendRaw(Data: number[]): void;
	Send(Event: MidiEvent): void;
	OpenOutput(Port: number): boolean;
	OpenInput(Port: number): boolean;
	CloseOutput(): void;
	CloseInput(): void;
	static C(Other: UObject | any): MidiInterfaceComponent;
}

declare class MidiDevice { 
	Name: string;
	Port: number;
	clone() : MidiDevice;
	static C(Other: UObject | any): MidiDevice;
}

declare class MidiInterface extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MidiInterface;
	static Find(Outer: UObject, ResourceName: string): MidiInterface;
	static GetDefaultObject(): MidiInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MidiInterface;
	static SendMidiRaw(Data: number[]): void;
	static SendMidiEvent(Event: MidiEvent): void;
	static OpenMidiOutput(Port: number): boolean;
	static isOutputOpen(): boolean;
	static GetMidiDevices(Input?: MidiDevice[],Output?: MidiDevice[]): {Input: MidiDevice[], Output: MidiDevice[]};
	static CloseMidiOutput(): void;
	static C(Other: UObject | any): MidiInterface;
}

declare class SoundNodeProceduralTest extends SoundNode { 
	Volume: number;
	Frequency: number;
	static Load(ResourceName: string): SoundNodeProceduralTest;
	static Find(Outer: UObject, ResourceName: string): SoundNodeProceduralTest;
	static GetDefaultObject(): SoundNodeProceduralTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeProceduralTest;
	static C(Other: UObject | any): SoundNodeProceduralTest;
}

declare class SoundUtils extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SoundUtils;
	static Find(Outer: UObject, ResourceName: string): SoundUtils;
	static GetDefaultObject(): SoundUtils;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundUtils;
	static ConstantNote(Amplitude: number,Frequency: number): SoundWave;
	static AudioNote(Amplitude: number,Frequency: number,Seconds: number): SoundWave;
	static C(Other: UObject | any): SoundUtils;
}

declare class SoundWaveProceduralTest extends SoundWave { 
	static Load(ResourceName: string): SoundWaveProceduralTest;
	static Find(Outer: UObject, ResourceName: string): SoundWaveProceduralTest;
	static GetDefaultObject(): SoundWaveProceduralTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundWaveProceduralTest;
	static C(Other: UObject | any): SoundWaveProceduralTest;
}

declare class ModoBridgeMeshAssetData extends AssetUserData { 
	static Load(ResourceName: string): ModoBridgeMeshAssetData;
	static Find(Outer: UObject, ResourceName: string): ModoBridgeMeshAssetData;
	static GetDefaultObject(): ModoBridgeMeshAssetData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModoBridgeMeshAssetData;
	static C(Other: UObject | any): ModoBridgeMeshAssetData;
}

declare class MetadataAsset extends DataAsset { 
	Strings: any;
	Integers: any;
	Floats: any;
	static Load(ResourceName: string): MetadataAsset;
	static Find(Outer: UObject, ResourceName: string): MetadataAsset;
	static GetDefaultObject(): MetadataAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MetadataAsset;
	static C(Other: UObject | any): MetadataAsset;
}

declare class SceneProtocolDirectionalLightActor extends Actor { 
	directionalComponent: DirectionalLightComponent;
	MetaData: MetadataAsset;
	static GetDefaultObject(): SceneProtocolDirectionalLightActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolDirectionalLightActor;
	static C(Other: UObject | any): SceneProtocolDirectionalLightActor;
}

declare class SceneProtocolOptions extends UObject { 
	Server: string;
	Port: any;
	Timeout: any;
	UseCustomActorClasses: boolean;
	static Load(ResourceName: string): SceneProtocolOptions;
	static Find(Outer: UObject, ResourceName: string): SceneProtocolOptions;
	static GetDefaultObject(): SceneProtocolOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolOptions;
	static C(Other: UObject | any): SceneProtocolOptions;
}

declare class SceneProtocolPawn extends DefaultPawn { 
	FirstPersonCameraComponent: CameraComponent;
	static GetDefaultObject(): SceneProtocolPawn;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolPawn;
	static C(Other: UObject | any): SceneProtocolPawn;
}

declare class SceneProtocolPlayerStartActor extends PlayerStart { 
	MetaData: MetadataAsset;
	static GetDefaultObject(): SceneProtocolPlayerStartActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolPlayerStartActor;
	static C(Other: UObject | any): SceneProtocolPlayerStartActor;
}

declare class SceneProtocolPointLightActor extends Actor { 
	pointComponent: PointLightComponent;
	MetaData: MetadataAsset;
	static GetDefaultObject(): SceneProtocolPointLightActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolPointLightActor;
	static C(Other: UObject | any): SceneProtocolPointLightActor;
}

declare class SceneProtocolSpotLightActor extends Actor { 
	spotComponent: SpotLightComponent;
	MetaData: MetadataAsset;
	static GetDefaultObject(): SceneProtocolSpotLightActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolSpotLightActor;
	static C(Other: UObject | any): SceneProtocolSpotLightActor;
}

declare class SceneProtocolStaticMeshActor extends StaticMeshActor { 
	MetaData: MetadataAsset;
	static GetDefaultObject(): SceneProtocolStaticMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolStaticMeshActor;
	static C(Other: UObject | any): SceneProtocolStaticMeshActor;
}

declare class SceneProtocolUserData extends AssetUserData { 
	itemToken: string;
	static Load(ResourceName: string): SceneProtocolUserData;
	static Find(Outer: UObject, ResourceName: string): SceneProtocolUserData;
	static GetDefaultObject(): SceneProtocolUserData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolUserData;
	static C(Other: UObject | any): SceneProtocolUserData;
}

declare class SceneProtocolCreateProjectCommandlet extends Commandlet { 
	static Load(ResourceName: string): SceneProtocolCreateProjectCommandlet;
	static Find(Outer: UObject, ResourceName: string): SceneProtocolCreateProjectCommandlet;
	static GetDefaultObject(): SceneProtocolCreateProjectCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolCreateProjectCommandlet;
	static C(Other: UObject | any): SceneProtocolCreateProjectCommandlet;
}

declare class SceneProtocolFetchSceneCommandlet extends Commandlet { 
	static Load(ResourceName: string): SceneProtocolFetchSceneCommandlet;
	static Find(Outer: UObject, ResourceName: string): SceneProtocolFetchSceneCommandlet;
	static GetDefaultObject(): SceneProtocolFetchSceneCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneProtocolFetchSceneCommandlet;
	static C(Other: UObject | any): SceneProtocolFetchSceneCommandlet;
}

declare class QuickCommandsSettings extends UObject { 
	SaveDirectoryS: string;
	Filenames: string;
	static Load(ResourceName: string): QuickCommandsSettings;
	static Find(Outer: UObject, ResourceName: string): QuickCommandsSettings;
	static GetDefaultObject(): QuickCommandsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuickCommandsSettings;
	static C(Other: UObject | any): QuickCommandsSettings;
}

declare class RichTextBlockInlineDecorator extends RichTextBlockDecorator { 
	static Load(ResourceName: string): RichTextBlockInlineDecorator;
	static Find(Outer: UObject, ResourceName: string): RichTextBlockInlineDecorator;
	static GetDefaultObject(): RichTextBlockInlineDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RichTextBlockInlineDecorator;
	static C(Other: UObject | any): RichTextBlockInlineDecorator;
}

declare type EGravityDirection = 'DIR_DOWN' | 'DIR_UP' | 'DIR_LEFT' | 'DIR_RIGHT' | 'DIR_FORWARD' | 'DIR_BACK' | 'DIR_RELATIVE' | 'DIR_MAX';
declare var EGravityDirection : { DIR_DOWN:'DIR_DOWN',DIR_UP:'DIR_UP',DIR_LEFT:'DIR_LEFT',DIR_RIGHT:'DIR_RIGHT',DIR_FORWARD:'DIR_FORWARD',DIR_BACK:'DIR_BACK',DIR_RELATIVE:'DIR_RELATIVE',DIR_MAX:'DIR_MAX', };
declare class RunebergVR_CustomGravity extends ActorComponent { 
	GravityDirection: EGravityDirection;
	GravityStrength: number;
	GravityOrigin: Vector;
	StopTags: string[];
	StartTags: string[];
	IsGravityActive: boolean;
	static Load(ResourceName: string): RunebergVR_CustomGravity;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_CustomGravity;
	static GetDefaultObject(): RunebergVR_CustomGravity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_CustomGravity;
	ProcessTags(OtherActor: Actor,OtherComp: PrimitiveComponent): void;
	static C(Other: UObject | any): RunebergVR_CustomGravity;
}

declare class RunebergVR_Climb extends SceneComponent { 
	ClimbTags: string[];
	InitialLocation: Vector;
	IsClimbing: boolean;
	CustomGravity: RunebergVR_CustomGravity;
	static Load(ResourceName: string): RunebergVR_Climb;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Climb;
	static GetDefaultObject(): RunebergVR_Climb;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Climb;
	LetGo(): void;
	Climb(): void;
	static C(Other: UObject | any): RunebergVR_Climb;
}

declare class GazeReadOnly { 
	IsGazing: boolean;
	GazeHasHit: boolean;
	clone() : GazeReadOnly;
	static C(Other: UObject | any): GazeReadOnly;
}

declare class FrontGaze { 
	StopGazeAfterHit: boolean;
	GazeCurrentDuration: number;
	TargetTag: string;
	TargetCollisionType: ECollisionChannel;
	TargetStaticMesh: StaticMesh;
	TargetMaterial: MaterialInterface;
	TargetRotation: Rotator;
	bRotateToFacePawn: boolean;
	TargetScale3D: Vector;
	clone() : FrontGaze;
	static C(Other: UObject | any): FrontGaze;
}

declare class RunebergVR_Gaze extends SceneComponent { 
	RuntimeReadOnly: GazeReadOnly;
	FrontGazeVariables: FrontGaze;
	OnGazeHit: UnrealEngineMulticastDelegate<(GazeHit: HitResult, PercentActive: number) => void>;
	OnGazeActivate: UnrealEngineMulticastDelegate<(GazeHit: HitResult) => void>;
	OnGazeLost: UnrealEngineMulticastDelegate<(LastGazeHit: HitResult) => void>;
	static Load(ResourceName: string): RunebergVR_Gaze;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Gaze;
	static GetDefaultObject(): RunebergVR_Gaze;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Gaze;
	StartGaze(Gaze_Range: number,Gaze_TargetDuration: number,DrawDebugLine: boolean): void;
	EndGaze(): void;
	static C(Other: UObject | any): RunebergVR_Gaze;
}

declare class VRGesture { 
	GestureName: string;
	GesturePattern: Vector[];
	clone() : VRGesture;
	static C(Other: UObject | any): VRGesture;
}

declare class RunebergVR_Gestures_Database extends DataAsset { 
	VRGesturePatterns: VRGesture[];
	static Load(ResourceName: string): RunebergVR_Gestures_Database;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Gestures_Database;
	static GetDefaultObject(): RunebergVR_Gestures_Database;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Gestures_Database;
	static C(Other: UObject | any): RunebergVR_Gestures_Database;
}

declare class RunebergVR_Gestures extends SceneComponent { 
	KnownGesturesDB: RunebergVR_Gestures_Database;
	GlobalThreshold: number;
	VectorThreshold: number;
	MaxSlope: number;
	VRGesture: VRGesture;
	IsRecording: boolean;
	static Load(ResourceName: string): RunebergVR_Gestures;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Gestures;
	static GetDefaultObject(): RunebergVR_Gestures;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Gestures;
	StopRecordingGesture(SaveToDB: boolean): VRGesture;
	StartRecordingGesture(RecordingInterval: number,GestureName: string,DrawLine: boolean,LineMesh: StaticMesh,LineMaterial: Material,LineOffset: Vector,RotationOffset: Rotator): void;
	SaveGestureToDB(): boolean;
	FindGesture(): string;
	EmptyKnownGestures(): boolean;
	DrawVRGesture(VR_Gesture: VRGesture,LineMesh: StaticMesh,LineMaterial: Material,OriginLocation: Vector,OriginRotation: Rotator,OffsetLocation: Vector,OffsetDistance: number,LifeTime: number): void;
	static C(Other: UObject | any): RunebergVR_Gestures;
}

declare type EGrabTypeEnum = 'PRECISION_GRAB' | 'SNAP_GRAB' | 'LOCK_GRAB' | 'DANGLING_GRAB' | 'PRECISION_LOCK' | 'EGrabTypeEnum_MAX';
declare var EGrabTypeEnum : { PRECISION_GRAB:'PRECISION_GRAB',SNAP_GRAB:'SNAP_GRAB',LOCK_GRAB:'LOCK_GRAB',DANGLING_GRAB:'DANGLING_GRAB',PRECISION_LOCK:'PRECISION_LOCK',EGrabTypeEnum_MAX:'EGrabTypeEnum_MAX', };
declare class RunebergVR_Grabber extends SceneComponent { 
	Grabbable_ObjectTypes: EObjectTypeQuery[];
	DistanceFromController: number;
	MinDistanceFromController: number;
	MaxDistanceFromController: number;
	SunReferencePoint: Vector;
	HorizonPitch: number;
	SunBrightness: number;
	static Load(ResourceName: string): RunebergVR_Grabber;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Grabber;
	static GetDefaultObject(): RunebergVR_Grabber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Grabber;
	StopPush(): Actor;
	StopPull(): Actor;
	SetDistanceFromController(NewDistance: number,MinDistance: number,MaxDistance: number): void;
	Release(): Actor;
	PushGrabbedObject(PushSpeed: number,MinDistance: number,MaxDistance: number): void;
	PullGrabbedObject(PullSpeed: number,MinDistance: number,MaxDistance: number): void;
	GrabSun(Sky_Sphere: Actor,SunCycleRate: number): boolean;
	Grab(Reach: number,DoRadialTrace: boolean,ScanOnlyWillManuallyAttach: boolean,GrabMode: EGrabTypeEnum,TagName: string,Rotation_Offset: Rotator,RetainObjectRotation: boolean,RetainDistance: boolean,ShowDebug: boolean): Actor;
	static C(Other: UObject | any): RunebergVR_Grabber;
}

declare class RunebergVR_Movement extends ActorComponent { 
	CurrentMovementSpeed: number;
	TargetRotation: Rotator;
	OffsetRotation: Rotator;
	CurrentMovementDirectionReference: SceneComponent;
	NavMeshTolerance: Vector;
	IsMoving: boolean;
	IsBouncingBackFromVRBounds: boolean;
	EnableTerrainCheck: boolean;
	static Load(ResourceName: string): RunebergVR_Movement;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Movement;
	static GetDefaultObject(): RunebergVR_Movement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Movement;
	TimedMovement(MovementDuration: number,MovementSpeed: number,MovementDirectionReference: SceneComponent,LockPitchY: boolean,LockYawZ: boolean,LockRollX: boolean,CustomDirection: Rotator,ObeyNavMesh: boolean): void;
	TimedDashMove(MovementDuration: number,MovementSpeed: number,MovementDirection: Rotator,ObeyNavMesh: boolean): void;
	EnableVRMovement(MovementSpeed: number,MovementDirectionReference: SceneComponent,ObeyNavMesh: boolean,LockPitch: boolean,LockYaw: boolean,LockRoll: boolean,CustomDirection: Rotator): void;
	Enable360Movement(MovementDirectionReference: SceneComponent,ObeyNavMesh: boolean,LockPitch: boolean,LockYaw: boolean,LockRoll: boolean,MovementSpeed: number,XAxisInput: number,YAxisInput: number): void;
	DisableVRMovement(): void;
	BounceBackFromVRBounds(MovementSpeed: number,MovementDuration: number,ResetMovementStateAfterBounce: boolean): void;
	ApplySpeedMultiplier(SpeedMultiplier: number,BaseSpeed: number,UseCurrentSpeedAsBase: boolean): void;
	static C(Other: UObject | any): RunebergVR_Movement;
}

declare class GravityVariables { 
	RespondToUnevenTerrain: boolean;
	GravityStrength: number;
	Acceleration: number;
	FloorTraceRange: number;
	FloorTraceTolerance: number;
	MaxStepHeight: number;
	GravityDirection: Vector;
	clone() : GravityVariables;
	static C(Other: UObject | any): GravityVariables;
}

declare class RunebergVR_Pawn extends Pawn { 
	PawnRootMesh: StaticMeshComponent;
	OverrideDefaultMotionControllerHandSettings: boolean;
	EnableGravity: boolean;
	GravityVariables: GravityVariables;
	StepUpRate: number;
	OculusLocationOffset: Vector;
	HMDLocationOffset: Vector;
	CapsuleCollision: CapsuleComponent;
	Scene: SceneComponent;
	Camera: CameraComponent;
	MotionController_Left: MotionControllerComponent;
	MotionController_Right: MotionControllerComponent;
	static GetDefaultObject(): RunebergVR_Pawn;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Pawn;
	RotatePawn(RotationRate: number,XAxisInput: number,YAxisInput: number): void;
	PrintDebugMessage(Message: string,OverwriteExisting: boolean,Duration: number,Color: Color): void;
	OverridePawnValues(PawnBaseEyeHeight: number,FOV: number,CapsuleHalfHeight: number,CapsuleRadius: number,CapsuleRelativeLocation: Vector,SceneLocation: Vector,LeftControllerLocation: Vector,RightControllerLocation: Vector): void;
	IsHMDWorn(): boolean;
	static C(Other: UObject | any): RunebergVR_Pawn;
}

declare type EScaleDirectionEnum = 'SCALE_X' | 'SCALE_Y' | 'SCALE_Z' | 'SCALE_MAX';
declare var EScaleDirectionEnum : { SCALE_X:'SCALE_X',SCALE_Y:'SCALE_Y',SCALE_Z:'SCALE_Z',SCALE_MAX:'SCALE_MAX', };
declare class RunebergVR_ScalableMesh extends SceneComponent { 
	TargetLocation: Vector;
	MeshChildren: SceneComponent[];
	IsScaling: boolean;
	static Load(ResourceName: string): RunebergVR_ScalableMesh;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_ScalableMesh;
	static GetDefaultObject(): RunebergVR_ScalableMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_ScalableMesh;
	ScaleMeshUp(DistanceToScaleUpXYZ: Vector,RateXYZ: Vector,NewVisibility: boolean): void;
	ScaleMeshToLocation(Target_Location: Vector,Scale_Direction: EScaleDirectionEnum,Rate: number,NewVisibility: boolean): void;
	ScaleMeshDown(DistanceToScaleDownXYZ: Vector,RateXYZ: Vector,VisibilityAfterScale: boolean): void;
	ScaleDownAndMove(Scale_Direction: EScaleDirectionEnum,Rate: number,DistanceCorrection: number,VisibilityAfterScale: boolean): void;
	static C(Other: UObject | any): RunebergVR_ScalableMesh;
}

declare class RunebergVR_SimpleGrabber extends SceneComponent { 
	GrabSphereRadius: number;
	static Load(ResourceName: string): RunebergVR_SimpleGrabber;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_SimpleGrabber;
	static GetDefaultObject(): RunebergVR_SimpleGrabber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_SimpleGrabber;
	Release(EnablePhysics: boolean): void;
	OnEndOverlap(OverlappedComponent: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,OtherBodyIndex: number): void;
	OnBeginOverlap(OverlappedComponent: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,OtherBodyIndex: number,bFromSweep: boolean,SweepResult: HitResult): void;
	Grab(_ObjectTypeID: number): void;
	static C(Other: UObject | any): RunebergVR_SimpleGrabber;
}

declare class WorldFadeSettings { 
	bDoWorldFade: boolean;
	FromOpacity: number;
	ToOpacity: number;
	FadeDuration: number;
	FadeColor: LinearColor;
	bShouldFadeAudio: boolean;
	clone() : WorldFadeSettings;
	static C(Other: UObject | any): WorldFadeSettings;
}

declare type EMoveDirectionEnum = 'MOVE_FORWARD' | 'MOVE_BACKWARD' | 'MOVE_LEFT' | 'MOVE_RIGHT' | 'MOVE_CUSTOM' | 'MOVE_MAX';
declare var EMoveDirectionEnum : { MOVE_FORWARD:'MOVE_FORWARD',MOVE_BACKWARD:'MOVE_BACKWARD',MOVE_LEFT:'MOVE_LEFT',MOVE_RIGHT:'MOVE_RIGHT',MOVE_CUSTOM:'MOVE_CUSTOM',MOVE_MAX:'MOVE_MAX', };
declare class RunebergVR_Teleporter extends SceneComponent { 
	FadeOutTeleportOffset: number;
	TeleportBoundary_ObjectTypes: EObjectTypeQuery[];
	TeleportBeamMesh: StaticMesh;
	BeamMagnitude: number;
	BeamLocationOffset: Vector;
	RayInstantScale: boolean;
	RayScaleRate: number;
	BeamHitNavMeshTolerance: Vector;
	ArcOverrideGravity: number;
	TeleportTargetPawnSpawnOffset: Vector;
	FloorIsAtZ: number;
	TeleportTargetMesh: StaticMesh;
	TeleportTargetMeshScale: Vector;
	TeleportTargetMeshSpawnOffset: Vector;
	CustomMarkerRotation: Rotator;
	bFaceMarkerRotation: boolean;
	TeleportTargetParticle: ParticleSystem;
	TeleportTargetParticleScale: Vector;
	TeleportTargetParticleSpawnOffset: Vector;
	SteamVRHeightOffset: number;
	OculusHeightOffset: number;
	IsTeleporting: boolean;
	bIsTargetLocationValid: boolean;
	static Load(ResourceName: string): RunebergVR_Teleporter;
	static Find(Outer: UObject, ResourceName: string): RunebergVR_Teleporter;
	static GetDefaultObject(): RunebergVR_Teleporter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RunebergVR_Teleporter;
	TeleportNow(FadeOutOptions: WorldFadeSettings,FadeInOptions: WorldFadeSettings,ForceTeleport: boolean,TeleportPhysics: boolean): boolean;
	ShowTeleportRay(): boolean;
	ShowTeleportArc(): boolean;
	ShowMarker(): boolean;
	MoveMarker(MarkerDirection: EMoveDirectionEnum,Rate: number,CustomDirection: Rotator): boolean;
	HideTeleportRay(): boolean;
	HideTeleportArc(): boolean;
	HideMarker(): boolean;
	static C(Other: UObject | any): RunebergVR_Teleporter;
}

declare class ShadowActor extends Actor { 
	Address: string;
	static GetDefaultObject(): ShadowActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShadowActor;
	static C(Other: UObject | any): ShadowActor;
}

declare class AnimNode_Shadow extends AnimNode_Base { 
	Result: PoseLink;
	Address: string;
	RootName: string;
	clone() : AnimNode_Shadow;
	static C(Other: UObject | any): AnimNode_Shadow;
}

declare class AnimGraphNode_Shadow extends AnimGraphNode_Base { 
	UNode: AnimNode_Shadow;
	static Load(ResourceName: string): AnimGraphNode_Shadow;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_Shadow;
	static GetDefaultObject(): AnimGraphNode_Shadow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_Shadow;
	static C(Other: UObject | any): AnimGraphNode_Shadow;
}

declare class SpiderNavGridTracer extends Actor { 
	CollisionComp: SphereComponent;
	static GetDefaultObject(): SpiderNavGridTracer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpiderNavGridTracer;
	static C(Other: UObject | any): SpiderNavGridTracer;
}

declare class SpiderNavPoint extends Actor { 
	CollisionComp: SphereComponent;
	static GetDefaultObject(): SpiderNavPoint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpiderNavPoint;
	static C(Other: UObject | any): SpiderNavPoint;
}

declare class SpiderNavPointEdge extends SpiderNavPoint { 
	static GetDefaultObject(): SpiderNavPointEdge;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpiderNavPointEdge;
	static C(Other: UObject | any): SpiderNavPointEdge;
}

declare class SpiderNavGridBuilder extends Actor { 
	VolumeBox: BoxComponent;
	TracerActorBP: UnrealEngineClass;
	NavPointActorBP: UnrealEngineClass;
	NavPointEdgeActorBP: UnrealEngineClass;
	GridStepSize: number;
	ActorsWhiteList: Actor[];
	bUseActorWhiteList: boolean;
	ActorsBlackList: Actor[];
	bUseActorBlackList: boolean;
	bAutoRemoveTracers: boolean;
	bAutoSaveGrid: boolean;
	BounceNavDistance: number;
	TraceDistanceModificator: number;
	ClosePointsFilterModificator: number;
	ConnectionSphereRadiusModificator: number;
	TraceDistanceForEdgesModificator: number;
	EgdeDeviationModificator: number;
	static GetDefaultObject(): SpiderNavGridBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpiderNavGridBuilder;
	SaveGrid(): void;
	DrawDebugRelations(): void;
	BuildGrid(): number;
	static C(Other: UObject | any): SpiderNavGridBuilder;
}

declare class SpiderNavGridSaveGame extends SaveGame { 
	NavLocations: any;
	NavNormals: any;
	NavRelations: any;
	SaveSlotName: string;
	UserIndex: any;
	static Load(ResourceName: string): SpiderNavGridSaveGame;
	static Find(Outer: UObject, ResourceName: string): SpiderNavGridSaveGame;
	static GetDefaultObject(): SpiderNavGridSaveGame;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpiderNavGridSaveGame;
	static C(Other: UObject | any): SpiderNavGridSaveGame;
}

declare class SpiderNavigation extends Actor { 
	bAutoLoadGrid: boolean;
	DebugLinesThickness: number;
	static GetDefaultObject(): SpiderNavigation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpiderNavigation;
	LoadGrid(): boolean;
	GetNavNodesCount(): number;
	FindPath(Start: Vector,End: Vector,bFoundCompletePath?: boolean): {bFoundCompletePath: boolean, $: Vector[]};
	FindNextLocationAndNormal(CurrentLocation: Vector,TargetLocation: Vector,NextLocation?: Vector,Normal?: Vector): {NextLocation: Vector, Normal: Vector, $: boolean};
	FindClosestNodeNormal(Location: Vector): Vector;
	FindClosestNodeLocation(Location: Vector): Vector;
	DrawDebugRelations(): void;
	static C(Other: UObject | any): SpiderNavigation;
}

declare class StomtLabel extends UObject { 
	Name: string;
	Color: string;
	isPublic: boolean;
	asTargetOwner: boolean;
	static Load(ResourceName: string): StomtLabel;
	static Find(Outer: UObject, ResourceName: string): StomtLabel;
	static GetDefaultObject(): StomtLabel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtLabel;
	static C(Other: UObject | any): StomtLabel;
}

declare class Stomt extends UObject { 
	serversideID: string;
	target_id: string;
	positive: boolean;
	text: string;
	URL: string;
	anonym: boolean;
	img_name: string;
	lonlat: string;
	labels: StomtLabel[];
	static Load(ResourceName: string): Stomt;
	static Find(Outer: UObject, ResourceName: string): Stomt;
	static GetDefaultObject(): Stomt;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Stomt;
	static C(Other: UObject | any): Stomt;
}

declare type StomtEnumJson = 'None' | 'Null' | 'String' | 'Number' | 'Boolean' | 'Array' | 'Object' | 'StomtEnumJson_MAX';
declare var StomtEnumJson : { None:'None',Null:'Null',String:'String',Number:'Number',Boolean:'Boolean',Array:'Array',Object:'Object',StomtEnumJson_MAX:'StomtEnumJson_MAX', };
declare class StomtJsonValue extends UObject { 
	static Load(ResourceName: string): StomtJsonValue;
	static Find(Outer: UObject, ResourceName: string): StomtJsonValue;
	static GetDefaultObject(): StomtJsonValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtJsonValue;
	IsNull(): boolean;
	GetTypeString(): string;
	GetType(): StomtEnumJson;
	static ConstructJsonValueString(WorldContextObject: UObject,StringValue: string): StomtJsonValue;
	static ConstructJsonValueNumber(WorldContextObject: UObject,Number: number): StomtJsonValue;
	static ConstructJsonValueBool(WorldContextObject: UObject,InValue: boolean): StomtJsonValue;
	static ConstructJsonValueArray(WorldContextObject: UObject,inArray: StomtJsonValue[]): StomtJsonValue;
	AsString(): string;
	AsNumber(): number;
	AsBool(): boolean;
	AsArray(): StomtJsonValue[];
	static C(Other: UObject | any): StomtJsonValue;
}

declare class StomtRestJsonObject extends UObject { 
	static Load(ResourceName: string): StomtRestJsonObject;
	static Find(Outer: UObject, ResourceName: string): StomtRestJsonObject;
	static GetDefaultObject(): StomtRestJsonObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtRestJsonObject;
	SetStringField(FieldName: string,StringValue: string): void;
	SetStringArrayField(FieldName: string,StringArray: string[]): void;
	SetObjectField(FieldName: string,JsonObject: StomtRestJsonObject): void;
	SetObjectArrayField(FieldName: string,ObjectArray: StomtRestJsonObject[]): void;
	SetNumberField(FieldName: string,Number: number): void;
	SetNumberArrayField(FieldName: string,NumberArray: number[]): void;
	SetField(FieldName: string,JsonValue: StomtJsonValue): void;
	SetBoolField(FieldName: string,InValue: boolean): void;
	SetBoolArrayField(FieldName: string,BoolArray: boolean[]): void;
	SetArrayField(FieldName: string,inArray: StomtJsonValue[]): void;
	Reset(): void;
	RemoveField(FieldName: string): void;
	MergeJsonObject(InJsonObject: StomtRestJsonObject,Overwrite: boolean): void;
	HasField(FieldName: string): boolean;
	GetStringField(FieldName: string): string;
	GetStringArrayField(FieldName: string): string[];
	GetObjectField(FieldName: string): StomtRestJsonObject;
	GetObjectArrayField(FieldName: string): StomtRestJsonObject[];
	GetNumberField(FieldName: string): number;
	GetNumberArrayField(FieldName: string): number[];
	GetFieldNames(): string[];
	GetField(FieldName: string): StomtJsonValue;
	GetBoolField(FieldName: string): boolean;
	GetBoolArrayField(FieldName: string): boolean[];
	GetArrayField(FieldName: string): StomtJsonValue[];
	EncodeJsonToSingleString(): string;
	EncodeJson(): string;
	DecodeJson(JsonString: string): boolean;
	static ConstructJsonObject(WorldContextObject: UObject): StomtRestJsonObject;
	static C(Other: UObject | any): StomtRestJsonObject;
}

declare class StomtRestRequest extends UObject { 
	OnRequestComplete: UnrealEngineMulticastDelegate<(request: StomtRestRequest) => void>;
	OnRequestFail: UnrealEngineMulticastDelegate<(request: StomtRestRequest) => void>;
	ResponseContent: string;
	bIsValidJsonResponse: boolean;
	RequestJsonObj: StomtRestJsonObject;
	ResponseJsonObj: StomtRestJsonObject;
	static Load(ResourceName: string): StomtRestRequest;
	static Find(Outer: UObject, ResourceName: string): StomtRestRequest;
	static GetDefaultObject(): StomtRestRequest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtRestRequest;
	static C(Other: UObject | any): StomtRestRequest;
}

declare class StomtConfig extends UObject { 
	OnConfigUpdated: UnrealEngineMulticastDelegate<(Config: StomtConfig) => void>;
	Stomts: StomtJsonValue[];
	static Load(ResourceName: string): StomtConfig;
	static Find(Outer: UObject, ResourceName: string): StomtConfig;
	static GetDefaultObject(): StomtConfig;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtConfig;
	SetAcceptScreenshotUpload(acceptScreenshotUpload: boolean): void;
	SetAcceptLogUpload(acceptLogUpload: boolean): void;
	Load(): void;
	GetSubscribed(): boolean;
	GetStomtsAsJson(): StomtJsonValue[];
	GetStomts(): Stomt[];
	GetLoggedIn(): boolean;
	GetAccessToken(): string;
	GetAcceptScreenshotUpload(): boolean;
	GetAcceptLogUpload(): boolean;
	AddStomt(Stomt: Stomt): boolean;
	static C(Other: UObject | any): StomtConfig;
}

declare class StomtTrack extends UObject { 
	static Load(ResourceName: string): StomtTrack;
	static Find(Outer: UObject, ResourceName: string): StomtTrack;
	static GetDefaultObject(): StomtTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtTrack;
	SetEventLabel(EventLabel: string): void;
	SetEventCategory(EventCategory: string): void;
	SetEventAction(EventAction: string): void;
	static C(Other: UObject | any): StomtTrack;
}

declare class StomtAPI extends UObject { 
	OnSessionRequestComplete: UnrealEngineMulticastDelegate<(request: StomtRestRequest) => void>;
	OnTargetRequestComplete: UnrealEngineMulticastDelegate<(request: StomtRestRequest) => void>;
	OnLoginRequestComplete: UnrealEngineMulticastDelegate<(request: StomtRestRequest) => void>;
	OnRequestFailed: UnrealEngineMulticastDelegate<(request: StomtRestRequest) => void>;
	Config: StomtConfig;
	Track: StomtTrack;
	ImageUploadName: string;
	UseImageUpload: boolean;
	useDefaultLabels: boolean;
	StomtURL: string;
	TargetName: string;
	TargetID: string;
	StomtsCreatedByUser: number;
	StomtsReceivedByTarget: number;
	UserID: string;
	Languages: StomtRestJsonObject;
	CurrentLanguage: string;
	static Load(ResourceName: string): StomtAPI;
	static Find(Outer: UObject, ResourceName: string): StomtAPI;
	static GetDefaultObject(): StomtAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtAPI;
	UseScreenshotUpload(UseUpload: boolean): void;
	SetStomtURL(URL: string): void;
	SetRestURL(URL: string): void;
	SetCurrentLanguage(Language: string): boolean;
	SendTrack(Track: StomtTrack): void;
	SendOfflineStomts(): void;
	RequestTargetByAppID(): StomtRestRequest;
	RequestTarget(TargetID: string): StomtRestRequest;
	ReadScreenshotAsBase64(): string;
	OnSendStomtRequestResponse(request: StomtRestRequest): void;
	OnSendLogoutResponse(request: StomtRestRequest): void;
	OnSendLogFileResponse(request: StomtRestRequest): void;
	OnSendImageFileResponse(request: StomtRestRequest): void;
	OnSendEMailResponse(request: StomtRestRequest): void;
	OnRequestTargetResponse(request: StomtRestRequest): void;
	OnRequestSessionResponse(request: StomtRestRequest): void;
	OnLoginRequestResponse(request: StomtRestRequest): void;
	OnARequestFailed(request: StomtRestRequest): void;
	LoadLanguageFile(): StomtRestJsonObject;
	IsEmailCorrect(EMail: string): boolean;
	IsConnected(): boolean;
	GetStomtURL(): string;
	GetRestURL(): string;
	GetLangText(text: string): string;
	GetCurrentLanguage(): string;
	DoesScreenshotFileExist(): boolean;
	ConnectionTest(): void;
	static C(Other: UObject | any): StomtAPI;
}

declare class StomtPluginWidget extends UserWidget { 
	Message: string;
	EMail: string;
	UserName: string;
	UserPassword: string;
	TargetName: string;
	ImageURL: string;
	api: StomtAPI;
	Config: StomtConfig;
	UsePhoneNumber: boolean;
	IsWish: boolean;
	IsScreenshotSelected: boolean;
	IsEMailAlreadyKnown: boolean;
	IsUserLoggedIn: boolean;
	UploadLogs: boolean;
	LoginErrorCode: number;
	labels: string[];
	Stomt: Stomt;
	static Load(ResourceName: string): StomtPluginWidget;
	static Find(Outer: UObject, ResourceName: string): StomtPluginWidget;
	static GetDefaultObject(): StomtPluginWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StomtPluginWidget;
	UploadScreenshot(): void;
	OnTargetResponse(TargetRequest: StomtRestRequest): void;
	OnSubmitLogin(): boolean;
	OnSubmitLastLayer(): void;
	OnSubmitEMail(): void;
	OnSubmit(): void;
	OnMessageChanged(text: string): void;
	OnLogout(): void;
	OnLoginResponse(CurrentRequest: StomtRestRequest): void;
	OnConstruction(AppID: string): void;
	AppendStomtURLParams(URL: string,utm_content: string): string;
	static C(Other: UObject | any): StomtPluginWidget;
}

declare class MaterialExpressionObjectRadius2 extends MaterialExpression { 
	static Load(ResourceName: string): MaterialExpressionObjectRadius2;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionObjectRadius2;
	static GetDefaultObject(): MaterialExpressionObjectRadius2;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectRadius2;
	static C(Other: UObject | any): MaterialExpressionObjectRadius2;
}

declare class MaterialExpressionVertexNormalWS2 extends MaterialExpression { 
	static Load(ResourceName: string): MaterialExpressionVertexNormalWS2;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionVertexNormalWS2;
	static GetDefaultObject(): MaterialExpressionVertexNormalWS2;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVertexNormalWS2;
	static C(Other: UObject | any): MaterialExpressionVertexNormalWS2;
}

declare class MaterialFunctionSubroutine extends UObject { 
	static Load(ResourceName: string): MaterialFunctionSubroutine;
	static Find(Outer: UObject, ResourceName: string): MaterialFunctionSubroutine;
	static GetDefaultObject(): MaterialFunctionSubroutine;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialFunctionSubroutine;
	static C(Other: UObject | any): MaterialFunctionSubroutine;
}

declare class SRAlbedoMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRAlbedoMap;
	static Find(Outer: UObject, ResourceName: string): SRAlbedoMap;
	static GetDefaultObject(): SRAlbedoMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRAlbedoMap;
	static C(Other: UObject | any): SRAlbedoMap;
}

declare class SRDiffusionMicrofiber extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRDiffusionMicrofiber;
	static Find(Outer: UObject, ResourceName: string): SRDiffusionMicrofiber;
	static GetDefaultObject(): SRDiffusionMicrofiber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRDiffusionMicrofiber;
	static C(Other: UObject | any): SRDiffusionMicrofiber;
}

declare class SRDiffusionScatter extends SRDiffusionMicrofiber { 
	static Load(ResourceName: string): SRDiffusionScatter;
	static Find(Outer: UObject, ResourceName: string): SRDiffusionScatter;
	static GetDefaultObject(): SRDiffusionScatter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRDiffusionScatter;
	static C(Other: UObject | any): SRDiffusionScatter;
}

declare class SRDiffusionSkin extends SRDiffusionMicrofiber { 
	static Load(ResourceName: string): SRDiffusionSkin;
	static Find(Outer: UObject, ResourceName: string): SRDiffusionSkin;
	static GetDefaultObject(): SRDiffusionSkin;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRDiffusionSkin;
	static C(Other: UObject | any): SRDiffusionSkin;
}

declare class SRDisplacementHeight extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRDisplacementHeight;
	static Find(Outer: UObject, ResourceName: string): SRDisplacementHeight;
	static GetDefaultObject(): SRDisplacementHeight;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRDisplacementHeight;
	static C(Other: UObject | any): SRDisplacementHeight;
}

declare class SREmissiveHeat extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SREmissiveHeat;
	static Find(Outer: UObject, ResourceName: string): SREmissiveHeat;
	static GetDefaultObject(): SREmissiveHeat;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SREmissiveHeat;
	static C(Other: UObject | any): SREmissiveHeat;
}

declare class SREmissiveMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SREmissiveMap;
	static Find(Outer: UObject, ResourceName: string): SREmissiveMap;
	static GetDefaultObject(): SREmissiveMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SREmissiveMap;
	static C(Other: UObject | any): SREmissiveMap;
}

declare class SRMicrosurfaceGlossMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRMicrosurfaceGlossMap;
	static Find(Outer: UObject, ResourceName: string): SRMicrosurfaceGlossMap;
	static GetDefaultObject(): SRMicrosurfaceGlossMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRMicrosurfaceGlossMap;
	static C(Other: UObject | any): SRMicrosurfaceGlossMap;
}

declare class SROcclusionMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SROcclusionMap;
	static Find(Outer: UObject, ResourceName: string): SROcclusionMap;
	static GetDefaultObject(): SROcclusionMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SROcclusionMap;
	static C(Other: UObject | any): SROcclusionMap;
}

declare class SRReflectivityMetalnessMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRReflectivityMetalnessMap;
	static Find(Outer: UObject, ResourceName: string): SRReflectivityMetalnessMap;
	static GetDefaultObject(): SRReflectivityMetalnessMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRReflectivityMetalnessMap;
	static C(Other: UObject | any): SRReflectivityMetalnessMap;
}

declare class SRReflectivitySpecularMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRReflectivitySpecularMap;
	static Find(Outer: UObject, ResourceName: string): SRReflectivitySpecularMap;
	static GetDefaultObject(): SRReflectivitySpecularMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRReflectivitySpecularMap;
	static C(Other: UObject | any): SRReflectivitySpecularMap;
}

declare class SRSubdivisionFlat extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRSubdivisionFlat;
	static Find(Outer: UObject, ResourceName: string): SRSubdivisionFlat;
	static GetDefaultObject(): SRSubdivisionFlat;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRSubdivisionFlat;
	static C(Other: UObject | any): SRSubdivisionFlat;
}

declare class SRSubdivisionPN extends SRSubdivisionFlat { 
	static Load(ResourceName: string): SRSubdivisionPN;
	static Find(Outer: UObject, ResourceName: string): SRSubdivisionPN;
	static GetDefaultObject(): SRSubdivisionPN;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRSubdivisionPN;
	static C(Other: UObject | any): SRSubdivisionPN;
}

declare class SRSurfaceNormalMap extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRSurfaceNormalMap;
	static Find(Outer: UObject, ResourceName: string): SRSurfaceNormalMap;
	static GetDefaultObject(): SRSurfaceNormalMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRSurfaceNormalMap;
	static C(Other: UObject | any): SRSurfaceNormalMap;
}

declare class SRSurfaceParallaxMap extends SRSurfaceNormalMap { 
	static Load(ResourceName: string): SRSurfaceParallaxMap;
	static Find(Outer: UObject, ResourceName: string): SRSurfaceParallaxMap;
	static GetDefaultObject(): SRSurfaceParallaxMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRSurfaceParallaxMap;
	static C(Other: UObject | any): SRSurfaceParallaxMap;
}

declare class SRTransparency extends MaterialFunctionSubroutine { 
	static Load(ResourceName: string): SRTransparency;
	static Find(Outer: UObject, ResourceName: string): SRTransparency;
	static GetDefaultObject(): SRTransparency;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRTransparency;
	static C(Other: UObject | any): SRTransparency;
}

declare class SRTransparencyAdd extends SRTransparency { 
	static Load(ResourceName: string): SRTransparencyAdd;
	static Find(Outer: UObject, ResourceName: string): SRTransparencyAdd;
	static GetDefaultObject(): SRTransparencyAdd;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRTransparencyAdd;
	static C(Other: UObject | any): SRTransparencyAdd;
}

declare class SRTransparencyAlphaTest extends SRTransparency { 
	static Load(ResourceName: string): SRTransparencyAlphaTest;
	static Find(Outer: UObject, ResourceName: string): SRTransparencyAlphaTest;
	static GetDefaultObject(): SRTransparencyAlphaTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRTransparencyAlphaTest;
	static C(Other: UObject | any): SRTransparencyAlphaTest;
}

declare class SRTransparencyDither extends SRTransparency { 
	static Load(ResourceName: string): SRTransparencyDither;
	static Find(Outer: UObject, ResourceName: string): SRTransparencyDither;
	static GetDefaultObject(): SRTransparencyDither;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SRTransparencyDither;
	static C(Other: UObject | any): SRTransparencyDither;
}

declare class ToolbagImportFactory extends Factory { 
	static Load(ResourceName: string): ToolbagImportFactory;
	static Find(Outer: UObject, ResourceName: string): ToolbagImportFactory;
	static GetDefaultObject(): ToolbagImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToolbagImportFactory;
	static C(Other: UObject | any): ToolbagImportFactory;
}

declare class ToolbagImportUI extends UObject { 
	static Load(ResourceName: string): ToolbagImportUI;
	static Find(Outer: UObject, ResourceName: string): ToolbagImportUI;
	static GetDefaultObject(): ToolbagImportUI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToolbagImportUI;
	static C(Other: UObject | any): ToolbagImportUI;
}

declare class ToolbagMaterialImportFactory extends Factory { 
	static Load(ResourceName: string): ToolbagMaterialImportFactory;
	static Find(Outer: UObject, ResourceName: string): ToolbagMaterialImportFactory;
	static GetDefaultObject(): ToolbagMaterialImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToolbagMaterialImportFactory;
	static C(Other: UObject | any): ToolbagMaterialImportFactory;
}

declare class TwitchApi extends UObject { 
	static Load(ResourceName: string): TwitchApi;
	static Find(Outer: UObject, ResourceName: string): TwitchApi;
	static GetDefaultObject(): TwitchApi;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitchApi;
	static C(Other: UObject | any): TwitchApi;
}

declare class TwitchChannel { 
	mature: boolean;
	Status: string;
	broadcaster_language: string;
	Game: string;
	Language: string;
	Name: string;
	created_at: string;
	updated_at: string;
	_id: string;
	logo: string;
	video_banner: string;
	profile_banner: string;
	profile_banner_background_color: string;
	partner: boolean;
	URL: string;
	views: number;
	followers: number;
	clone() : TwitchChannel;
	static C(Other: UObject | any): TwitchChannel;
}

declare class TwitchSubscription { 
	created_at: string;
	_id: string;
	sub_plan: string;
	sub_plan_name: string;
	is_gift: boolean;
	Channel: TwitchChannel;
	clone() : TwitchSubscription;
	static C(Other: UObject | any): TwitchSubscription;
}

declare class TwitchFollow { 
	created_at: string;
	notifications: boolean;
	Channel: TwitchChannel;
	clone() : TwitchFollow;
	static C(Other: UObject | any): TwitchFollow;
}

declare class TwitchChannelUser { 
	display_name: string;
	_id: string;
	Name: string;
	Type: string;
	bio: string;
	created_at: string;
	updated_at: string;
	logo: string;
	clone() : TwitchChannelUser;
	static C(Other: UObject | any): TwitchChannelUser;
}

declare class TwitchUserNotifications { 
	push: boolean;
	EMail: boolean;
	clone() : TwitchUserNotifications;
	static C(Other: UObject | any): TwitchUserNotifications;
}

declare class TwitchUser extends TwitchChannelUser { 
	EMail: string;
	email_verified: boolean;
	partnered: boolean;
	twitter_connected: boolean;
	notifications: TwitchUserNotifications;
	clone() : TwitchUser;
	static C(Other: UObject | any): TwitchUser;
}

declare class TwitchError { 
	Error: string;
	Status: number;
	Message: string;
	clone() : TwitchError;
	static C(Other: UObject | any): TwitchError;
}

declare class TwitchAuthComponent extends ActorComponent { 
	ClientId: string;
	bForceVerify: boolean;
	OnUserAuthenticated: UnrealEngineMulticastDelegate<(bAuthenticated: boolean) => void>;
	OnUserSubscribedToChannel: UnrealEngineMulticastDelegate<(bSubscribed: boolean, TwitchSubscription: TwitchSubscription) => void>;
	OnUserFollowingChannel: UnrealEngineMulticastDelegate<(bSubscribed: boolean, TwitchFollow: TwitchFollow) => void>;
	OnAuthenticationPageLoaded: UnrealEngineMulticastDelegate<() => void>;
	OnAccessTokenPageLoaded: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): TwitchAuthComponent;
	static Find(Outer: UObject, ResourceName: string): TwitchAuthComponent;
	static GetDefaultObject(): TwitchAuthComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitchAuthComponent;
	SetAccessToken(AccessToken: string): void;
	IsUserSubscribedToChannel(ChannelName: string): void;
	IsUserFollowingChannel(ChannelName: string): void;
	HandleOnUrlChanged(InText: string): void;
	GetWebBrowser(): WebBrowser;
	GetUser(): TwitchUser;
	GetLastError(): TwitchError;
	GetAccessToken(): string;
	ClearAccessToken(): void;
	Authenticate(WebBrowser: WebBrowser): void;
	static C(Other: UObject | any): TwitchAuthComponent;
}

declare class TwitchIRCComponent extends ActorComponent { 
	OnMessageReceived: UnrealEngineMulticastDelegate<(_message: string, _username: string) => void>;
	oauth_token_: string;
	username_: string;
	channel_: string;
	static Load(ResourceName: string): TwitchIRCComponent;
	static Find(Outer: UObject, ResourceName: string): TwitchIRCComponent;
	static GetDefaultObject(): TwitchIRCComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitchIRCComponent;
	SetUserInfo(_oauth: string,_username: string,_channel: string): void;
	SendIRCMessage(_message: string,_b_send_to: boolean,_channel: string): boolean;
	Connect(_out_error?: string): {_out_error: string, $: boolean};
	AuthenticateTwitchIRC(_out_error?: string): {_out_error: string, $: boolean};
	static C(Other: UObject | any): TwitchIRCComponent;
}

declare class TwitchPlayComponent extends TwitchIRCComponent { 
	command_encapsulation_char_: string;
	options_encapsulation_char_: string;
	static Load(ResourceName: string): TwitchPlayComponent;
	static Find(Outer: UObject, ResourceName: string): TwitchPlayComponent;
	static GetDefaultObject(): TwitchPlayComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitchPlayComponent;
	UnregisterCommand(_command_name: string,_out_result?: string): {_out_result: string, $: boolean};
	SetupEncapsulationChars(_command_char: string,_options_char: string): void;
	MessageReceivedHandler(_message: string,_username: string): void;
	static C(Other: UObject | any): TwitchPlayComponent;
}

declare type EVaRest_JsonType = 'JSON_Bool' | 'JSON_Number' | 'JSON_String' | 'JSON_Object' | 'JSON_MAX';
declare var EVaRest_JsonType : { JSON_Bool:'JSON_Bool',JSON_Number:'JSON_Number',JSON_String:'JSON_String',JSON_Object:'JSON_Object',JSON_MAX:'JSON_MAX', };
declare class VaRest_NamedType { 
	Name: string;
	Type: EVaRest_JsonType;
	bIsArray: boolean;
	clone() : VaRest_NamedType;
	static C(Other: UObject | any): VaRest_NamedType;
}

declare class VaRest_MakeJson extends K2Node { 
	Inputs: VaRest_NamedType[];
	static Load(ResourceName: string): VaRest_MakeJson;
	static Find(Outer: UObject, ResourceName: string): VaRest_MakeJson;
	static GetDefaultObject(): VaRest_MakeJson;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VaRest_MakeJson;
	static C(Other: UObject | any): VaRest_MakeJson;
}

declare class VaRest_BreakJson extends K2Node { 
	Outputs: VaRest_NamedType[];
	static Load(ResourceName: string): VaRest_BreakJson;
	static Find(Outer: UObject, ResourceName: string): VaRest_BreakJson;
	static GetDefaultObject(): VaRest_BreakJson;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VaRest_BreakJson;
	static C(Other: UObject | any): VaRest_BreakJson;
}

declare class VtaEditorPluginSettings extends UObject { 
	bGenerateSlateTextures: boolean;
	bGenerateMaterialInstances: boolean;
	bUseMultiAtlas: boolean;
	bUseNewAtlasAsset: boolean;
	static Load(ResourceName: string): VtaEditorPluginSettings;
	static Find(Outer: UObject, ResourceName: string): VtaEditorPluginSettings;
	static GetDefaultObject(): VtaEditorPluginSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaEditorPluginSettings;
	static C(Other: UObject | any): VtaEditorPluginSettings;
}

declare class VtaSlateTextureThumbnailRenderer extends ThumbnailRenderer { 
	static Load(ResourceName: string): VtaSlateTextureThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): VtaSlateTextureThumbnailRenderer;
	static GetDefaultObject(): VtaSlateTextureThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaSlateTextureThumbnailRenderer;
	static C(Other: UObject | any): VtaSlateTextureThumbnailRenderer;
}

declare class VtaJsonImportable { 
	clone() : VtaJsonImportable;
	static C(Other: UObject | any): VtaJsonImportable;
}

declare class VtaSize extends VtaJsonImportable { 
	W: number;
	H: number;
	clone() : VtaSize;
	static C(Other: UObject | any): VtaSize;
}

declare class VtaMeta extends VtaJsonImportable { 
	App: string;
	Version: string;
	UImage: string;
	Format: string;
	Size: VtaSize;
	clone() : VtaMeta;
	static C(Other: UObject | any): VtaMeta;
}

declare class VtaRegion extends VtaJsonImportable { 
	X: number;
	Y: number;
	W: number;
	H: number;
	clone() : VtaRegion;
	static C(Other: UObject | any): VtaRegion;
}

declare class VtaFrame extends VtaJsonImportable { 
	Filename: string;
	Frame: VtaRegion;
	clone() : VtaFrame;
	static C(Other: UObject | any): VtaFrame;
}

declare class VtaDataFile { 
	Meta: VtaMeta;
	Frames: VtaFrame[];
	clone() : VtaDataFile;
	static C(Other: UObject | any): VtaDataFile;
}

declare class VtaTextureAtlas extends UObject { 
	ImportedData: VtaDataFile;
	FrameNames: string[];
	Frames: MaterialInstanceConstant[];
	SlateTextures: VtaSlateTexture[];
	TextureName: string;
	Texture: Texture2D;
	Table: DataTable;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): VtaTextureAtlas;
	static Find(Outer: UObject, ResourceName: string): VtaTextureAtlas;
	static GetDefaultObject(): VtaTextureAtlas;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaTextureAtlas;
	static C(Other: UObject | any): VtaTextureAtlas;
}

declare class VtaTextureAtlasAsset extends UObject { 
	AtlasName: string;
	ImportPath: string;
	bIsMultipack: boolean;
	TextureCompressionSetting: TextureCompressionSettings;
	ImportedData: any;
	Textures: any;
	Frames: any;
	DataTable: DataTable;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): VtaTextureAtlasAsset;
	static Find(Outer: UObject, ResourceName: string): VtaTextureAtlasAsset;
	static GetDefaultObject(): VtaTextureAtlasAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaTextureAtlasAsset;
	static C(Other: UObject | any): VtaTextureAtlasAsset;
}

declare class VtaTextureAtlasAssetImportFactory extends Factory { 
	CurrentAtlas: VtaTextureAtlasAsset;
	static Load(ResourceName: string): VtaTextureAtlasAssetImportFactory;
	static Find(Outer: UObject, ResourceName: string): VtaTextureAtlasAssetImportFactory;
	static GetDefaultObject(): VtaTextureAtlasAssetImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaTextureAtlasAssetImportFactory;
	static C(Other: UObject | any): VtaTextureAtlasAssetImportFactory;
}

declare class VtaTextureAtlasImportFactory extends Factory { 
	ExistingTable: DataTable;
	static Load(ResourceName: string): VtaTextureAtlasImportFactory;
	static Find(Outer: UObject, ResourceName: string): VtaTextureAtlasImportFactory;
	static GetDefaultObject(): VtaTextureAtlasImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaTextureAtlasImportFactory;
	static C(Other: UObject | any): VtaTextureAtlasImportFactory;
}

declare class VtaTextureAtlasReimportFactory extends VtaTextureAtlasImportFactory { 
	static Load(ResourceName: string): VtaTextureAtlasReimportFactory;
	static Find(Outer: UObject, ResourceName: string): VtaTextureAtlasReimportFactory;
	static GetDefaultObject(): VtaTextureAtlasReimportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VtaTextureAtlasReimportFactory;
	static C(Other: UObject | any): VtaTextureAtlasReimportFactory;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFrameRate: FrameRate;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	ExrDecoderThreads: any;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSource extends BaseMediaSource { 
	FrameRateOverride: FrameRate;
	ProxyOverride: string;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetSequencePath(Path: string): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	static C(Other: UObject | any): ImgMediaSource;
}

declare class DropTimecode { 
	Timecode: Timecode;
	FrameRate: number;
	bColorFraming: boolean;
	bRunningForward: boolean;
	bNewFrame: boolean;
	clone() : DropTimecode;
	static C(Other: UObject | any): DropTimecode;
	Conv_DropTimecodeToString(): string;
	static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
}

declare class LinearTimecodeComponent extends SceneComponent { 
	MediaPlayer: MediaPlayer;
	DropTimecode: DropTimecode;
	OnTimecodeChange: UnrealEngineMulticastDelegate<(Timecode: DropTimecode) => void>;
	static Load(ResourceName: string): LinearTimecodeComponent;
	static Find(Outer: UObject, ResourceName: string): LinearTimecodeComponent;
	static GetDefaultObject(): LinearTimecodeComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinearTimecodeComponent;
	static SetDropTimecodeFrameNumber(Timecode: DropTimecode,FrameNumber: number,OutTimecode?: DropTimecode): {OutTimecode: DropTimecode};
	static GetDropTimeCodeFrameNumber(Timecode: DropTimecode,FrameNumber?: number): {FrameNumber: number};
	GetDropFrameNumber(): number;
	static C(Other: UObject | any): LinearTimecodeComponent;
}

declare class DropTimecodeToStringConversion extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): DropTimecodeToStringConversion;
	static Find(Outer: UObject, ResourceName: string): DropTimecodeToStringConversion;
	static GetDefaultObject(): DropTimecodeToStringConversion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DropTimecodeToStringConversion;
	static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
	static C(Other: UObject | any): DropTimecodeToStringConversion;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLooping: boolean;
	MediaTexture: MediaTexture;
	MediaSoundComponent: MediaSoundComponent;
	bUseExternalMediaPlayer: boolean;
	ExternalMediaPlayer: MediaPlayer;
	ThumbnailReferenceOffset: number;
	static Load(ResourceName: string): MovieSceneMediaSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
	static GetDefaultObject(): MovieSceneMediaSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaSection;
	static C(Other: UObject | any): MovieSceneMediaSection;
}

declare class MovieSceneMediaTrack extends MovieSceneNameableTrack { 
	MediaSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneMediaTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
	static GetDefaultObject(): MovieSceneMediaTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaTrack;
	static C(Other: UObject | any): MovieSceneMediaTrack;
}

declare class NetPropertyHook extends Property { 
	static Load(ResourceName: string): NetPropertyHook;
	static Find(Outer: UObject, ResourceName: string): NetPropertyHook;
	static GetDefaultObject(): NetPropertyHook;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetPropertyHook;
	static C(Other: UObject | any): NetPropertyHook;
}

declare class UnitTestBase extends UObject { 
	static Load(ResourceName: string): UnitTestBase;
	static Find(Outer: UObject, ResourceName: string): UnitTestBase;
	static GetDefaultObject(): UnitTestBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestBase;
	static C(Other: UObject | any): UnitTestBase;
}

declare class UnitTask extends UObject { 
	static Load(ResourceName: string): UnitTask;
	static Find(Outer: UObject, ResourceName: string): UnitTask;
	static GetDefaultObject(): UnitTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTask;
	static C(Other: UObject | any): UnitTask;
}

declare type EUnitTestVerification = 'Unverified' | 'VerifiedNotFixed' | 'VerifiedFixed' | 'VerifiedNeedsUpdate' | 'VerifiedUnreliable' | 'EUnitTestVerification_MAX';
declare var EUnitTestVerification : { Unverified:'Unverified',VerifiedNotFixed:'VerifiedNotFixed',VerifiedFixed:'VerifiedFixed',VerifiedNeedsUpdate:'VerifiedNeedsUpdate',VerifiedUnreliable:'VerifiedUnreliable',EUnitTestVerification_MAX:'EUnitTestVerification_MAX', };
declare class UnitTest extends UnitTestBase { 
	PeakMemoryUsage: any;
	TimeToPeakMem: number;
	LastExecutionTime: number;
	UnitTasks: UnitTask[];
	VerificationState: EUnitTestVerification;
	static Load(ResourceName: string): UnitTest;
	static Find(Outer: UObject, ResourceName: string): UnitTest;
	static GetDefaultObject(): UnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTest;
	static C(Other: UObject | any): UnitTest;
}

declare class ProcessUnitTest extends UnitTest { 
	static Load(ResourceName: string): ProcessUnitTest;
	static Find(Outer: UObject, ResourceName: string): ProcessUnitTest;
	static GetDefaultObject(): ProcessUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProcessUnitTest;
	static C(Other: UObject | any): ProcessUnitTest;
}

declare class MinimalClient extends UObject { 
	static Load(ResourceName: string): MinimalClient;
	static Find(Outer: UObject, ResourceName: string): MinimalClient;
	static GetDefaultObject(): MinimalClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MinimalClient;
	static C(Other: UObject | any): MinimalClient;
}

declare class ClientUnitTest extends ProcessUnitTest { 
	MinClient: MinimalClient;
	static Load(ResourceName: string): ClientUnitTest;
	static Find(Outer: UObject, ResourceName: string): ClientUnitTest;
	static GetDefaultObject(): ClientUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClientUnitTest;
	static C(Other: UObject | any): ClientUnitTest;
}

declare class IPClient extends ClientUnitTest { 
	static Load(ResourceName: string): IPClient;
	static Find(Outer: UObject, ResourceName: string): IPClient;
	static GetDefaultObject(): IPClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IPClient;
	static C(Other: UObject | any): IPClient;
}

declare class HTML5Client extends IPClient { 
	static Load(ResourceName: string): HTML5Client;
	static Find(Outer: UObject, ResourceName: string): HTML5Client;
	static GetDefaultObject(): HTML5Client;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5Client;
	static C(Other: UObject | any): HTML5Client;
}

declare class NUTActor extends Actor { 
	TempDelegate: UnrealEngineDelegate<(InNUTActor: NUTActor) => void>;
	static GetDefaultObject(): NUTActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTActor;
	Wait(Seconds: any): void;
	UnitTravel(Dest: string): void;
	UnitSeamlessTravel(Dest: string): void;
	ServerReceiveText(InText: string): void;
	ServerExecute(InDelegate: string): void;
	ServerClientStillAlive(): void;
	ServerClientPing(): void;
	ServerAdmin(Command: string): void;
	NetMulticastPing(): void;
	NetFlush(): void;
	Admin(Command: string): void;
	static C(Other: UObject | any): NUTActor;
}

declare class NUTGlobals extends UObject { 
	EventWatcher: NetConnection;
	ServerPortOffset: number;
	UnitTestNetDriverCount: number;
	DumpRPCMatches: string[];
	UnitTestModules: string[];
	UnloadedModules: string[];
	static Load(ResourceName: string): NUTGlobals;
	static Find(Outer: UObject, ResourceName: string): NUTGlobals;
	static GetDefaultObject(): NUTGlobals;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTGlobals;
	static C(Other: UObject | any): NUTGlobals;
}

declare class SteamClient extends IPClient { 
	static Load(ResourceName: string): SteamClient;
	static Find(Outer: UObject, ResourceName: string): SteamClient;
	static GetDefaultObject(): SteamClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamClient;
	static C(Other: UObject | any): SteamClient;
}

declare class UnitTestActorChannel extends ActorChannel { 
	static Load(ResourceName: string): UnitTestActorChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestActorChannel;
	static GetDefaultObject(): UnitTestActorChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestActorChannel;
	static C(Other: UObject | any): UnitTestActorChannel;
}

declare class UnitTestChannel extends Channel { 
	static Load(ResourceName: string): UnitTestChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestChannel;
	static GetDefaultObject(): UnitTestChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestChannel;
	static C(Other: UObject | any): UnitTestChannel;
}

declare class UnitTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): UnitTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): UnitTestCommandlet;
	static GetDefaultObject(): UnitTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestCommandlet;
	static C(Other: UObject | any): UnitTestCommandlet;
}

declare class UnitTestManager extends UObject { 
	bCapUnitTestCount: boolean;
	MaxUnitTestCount: number;
	bCapUnitTestMemory: boolean;
	MaxMemoryPercent: number;
	AutoCloseMemoryPercent: number;
	MaxAutoCloseCount: number;
	UnitTestSessionCount: any;
	PendingUnitTests: UnrealEngineClass[];
	ActiveUnitTests: UnitTest[];
	FinishedUnitTests: UnitTest[];
	static Load(ResourceName: string): UnitTestManager;
	static Find(Outer: UObject, ResourceName: string): UnitTestManager;
	static GetDefaultObject(): UnitTestManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestManager;
	static C(Other: UObject | any): UnitTestManager;
}

declare class UnitTestPackageMap extends PackageMapClient { 
	static Load(ResourceName: string): UnitTestPackageMap;
	static Find(Outer: UObject, ResourceName: string): UnitTestPackageMap;
	static GetDefaultObject(): UnitTestPackageMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestPackageMap;
	static C(Other: UObject | any): UnitTestPackageMap;
}

declare class VMReflection extends UnitTest { 
	static Load(ResourceName: string): VMReflection;
	static Find(Outer: UObject, ResourceName: string): VMReflection;
	static GetDefaultObject(): VMReflection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMReflection;
	static C(Other: UObject | any): VMReflection;
}

declare class VMTestClassA extends UObject { 
	AObjectRef: UObject;
	ByteProp: number;
	UInt16Prop: any;
	UInt32Prop: any;
	UInt64Prop: any;
	Int8Prop: any;
	Int16Prop: any;
	Int32Prop: number;
	Int64Prop: any;
	FloatProp: number;
	DoubleProp: any;
	bBoolPropA: boolean;
	bBoolPropB: boolean;
	bBoolPropC: boolean;
	bBoolPropD: boolean;
	bBoolPropE: boolean;
	NameProp: string;
	StringProp: string;
	TextProp: string;
	BytePropArray: number;
	ObjectPropArray: UObject;
	DynBytePropArray: number[];
	DynBoolPropArray: boolean[];
	DynObjectPropArray: UObject[];
	DynNamePropArray: string[];
	DynDoublePropArray: any[];
	DynFloatPropArray: number[];
	DynInt16PropArray: any[];
	DynInt64PropArray: any[];
	DynInt8PropArray: any[];
	DynIntPropArray: number[];
	DynUInt16PropArray: any[];
	DynUIntPropArray: any[];
	DynUInt64PropArray: any[];
	DynStringPropArray: string[];
	DynTextPropArray: string[];
	DynClassPropArray: UnrealEngineClass[];
	DynPawnPropArray: Pawn[];
	StructProp: Vector;
	StructPropArray: Vector;
	DynStructPropArray: Vector[];
	static Load(ResourceName: string): VMTestClassA;
	static Find(Outer: UObject, ResourceName: string): VMTestClassA;
	static GetDefaultObject(): VMTestClassA;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassA;
	static C(Other: UObject | any): VMTestClassA;
}

declare class VMTestClassB extends UObject { 
	BObjectRef: UObject;
	static Load(ResourceName: string): VMTestClassB;
	static Find(Outer: UObject, ResourceName: string): VMTestClassB;
	static GetDefaultObject(): VMTestClassB;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassB;
	static C(Other: UObject | any): VMTestClassB;
}

declare class FTextCrash extends ClientUnitTest { 
	static Load(ResourceName: string): FTextCrash;
	static Find(Outer: UObject, ResourceName: string): FTextCrash;
	static GetDefaultObject(): FTextCrash;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FTextCrash;
	static C(Other: UObject | any): FTextCrash;
}

declare class NetBitsTest extends UnitTest { 
	static Load(ResourceName: string): NetBitsTest;
	static Find(Outer: UObject, ResourceName: string): NetBitsTest;
	static GetDefaultObject(): NetBitsTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetBitsTest;
	static C(Other: UObject | any): NetBitsTest;
}

declare class UTT61_DebugReplicateData extends ClientUnitTest { 
	static Load(ResourceName: string): UTT61_DebugReplicateData;
	static Find(Outer: UObject, ResourceName: string): UTT61_DebugReplicateData;
	static GetDefaultObject(): UTT61_DebugReplicateData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UTT61_DebugReplicateData;
	static C(Other: UObject | any): UTT61_DebugReplicateData;
}

declare class AndroidPermissionCallbackProxy extends UObject { 
	OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: string[], GrantResults: boolean[]) => void>;
	static Load(ResourceName: string): AndroidPermissionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionCallbackProxy;
	static GetDefaultObject(): AndroidPermissionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}

declare class AndroidPermissionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionFunctionLibrary;
	static GetDefaultObject(): AndroidPermissionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionFunctionLibrary;
	static CheckPermission(Permission: string): boolean;
	static AcquirePermissions(Permissions: string[]): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}

declare class ArchVisCharacter extends Character { 
	LookUpAxisName: string;
	LookUpAtRateAxisName: string;
	TurnAxisName: string;
	TurnAtRateAxisName: string;
	MoveForwardAxisName: string;
	MoveRightAxisName: string;
	MouseSensitivityScale_Pitch: number;
	MouseSensitivityScale_Yaw: number;
	static GetDefaultObject(): ArchVisCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject | any): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	RotationalAcceleration: Rotator;
	RotationalDeceleration: Rotator;
	MaxRotationalVelocity: Rotator;
	MinPitch: number;
	MaxPitch: number;
	WalkingFriction: number;
	WalkingSpeed: number;
	WalkingAcceleration: number;
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject | any): ArchVisCharMovementComponent;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
	clone() : ComponentReference;
	static C(Other: UObject | any): ComponentReference;
}

declare class CableComponent extends MeshComponent { 
	bAttachStart: boolean;
	bAttachEnd: boolean;
	AttachEndTo: ComponentReference;
	AttachEndToSocketName: string;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	bEnableStiffness: boolean;
	bEnableCollision: boolean;
	CollisionFriction: number;
	CableForce: Vector;
	CableGravityScale: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static GetDefaultObject(): CableComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string,SocketName: string): void;
	GetCableParticleLocations(Locations?: Vector[]): {Locations: Vector[]};
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject | any): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	static GetDefaultObject(): CableActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject | any): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject | any): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static GetDefaultObject(): CustomMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject | any): CustomMeshComponent;
}

declare class MobileInstalledContent extends UObject { 
	static Load(ResourceName: string): MobileInstalledContent;
	static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
	static GetDefaultObject(): MobileInstalledContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobileInstalledContent;
	Mount(PakOrder: number,MountPoint: string): boolean;
	GetInstalledContentSize(): number;
	GetDiskFreeSpace(): number;
	static C(Other: UObject | any): MobileInstalledContent;
}

declare class MobilePendingContent extends MobileInstalledContent { 
	static Load(ResourceName: string): MobilePendingContent;
	static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
	static GetDefaultObject(): MobilePendingContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePendingContent;
	GetTotalDownloadedSize(): number;
	GetRequiredDiskSpace(): number;
	GetInstallProgress(): number;
	GetDownloadStatusText(): string;
	GetDownloadSpeed(): number;
	GetDownloadSize(): number;
	static C(Other: UObject | any): MobilePendingContent;
}

declare class MobilePatchingLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MobilePatchingLibrary;
	static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
	static GetDefaultObject(): MobilePatchingLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePatchingLibrary;
	static HasActiveWiFiConnection(): boolean;
	static GetSupportedPlatformNames(): string[];
	static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
	static GetActiveDeviceProfileName(): string;
	static C(Other: UObject | any): MobilePatchingLibrary;
}

declare type ESteamVRTouchDPadMapping = 'FaceButtons' | 'ThumbstickDirections' | 'Disabled' | 'ESteamVRTouchDPadMapping_MAX';
declare var ESteamVRTouchDPadMapping : { FaceButtons:'FaceButtons',ThumbstickDirections:'ThumbstickDirections',Disabled:'Disabled',ESteamVRTouchDPadMapping_MAX:'ESteamVRTouchDPadMapping_MAX', };
declare class SteamVRControllerLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SteamVRControllerLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRControllerLibrary;
	static GetDefaultObject(): SteamVRControllerLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRControllerLibrary;
	static SetTouchDPadMapping(NewMapping: ESteamVRTouchDPadMapping): void;
	static C(Other: UObject | any): SteamVRControllerLibrary;
}

declare class SubstanceFactory extends Factory { 
	static Load(ResourceName: string): SubstanceFactory;
	static Find(Outer: UObject, ResourceName: string): SubstanceFactory;
	static GetDefaultObject(): SubstanceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceFactory;
	static C(Other: UObject | any): SubstanceFactory;
}

declare class ReimportSubstanceFactory extends SubstanceFactory { 
	static Load(ResourceName: string): ReimportSubstanceFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSubstanceFactory;
	static GetDefaultObject(): ReimportSubstanceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSubstanceFactory;
	static C(Other: UObject | any): ReimportSubstanceFactory;
}

declare class SubstanceImageInputFactory extends Factory { 
	bCreateMaterial: boolean;
	bCreateDefaultInstance: boolean;
	static Load(ResourceName: string): SubstanceImageInputFactory;
	static Find(Outer: UObject, ResourceName: string): SubstanceImageInputFactory;
	static GetDefaultObject(): SubstanceImageInputFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImageInputFactory;
	static C(Other: UObject | any): SubstanceImageInputFactory;
}

declare class ReimportSubstanceImageInputFactory extends SubstanceImageInputFactory { 
	ReimportPaths: string[];
	static Load(ResourceName: string): ReimportSubstanceImageInputFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSubstanceImageInputFactory;
	static GetDefaultObject(): ReimportSubstanceImageInputFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSubstanceImageInputFactory;
	static C(Other: UObject | any): ReimportSubstanceImageInputFactory;
}

declare class SubstanceImageInputThumbnailRenderer extends ThumbnailRenderer { 
	static Load(ResourceName: string): SubstanceImageInputThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): SubstanceImageInputThumbnailRenderer;
	static GetDefaultObject(): SubstanceImageInputThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImageInputThumbnailRenderer;
	static C(Other: UObject | any): SubstanceImageInputThumbnailRenderer;
}

declare class SubstanceImportOptionsUi extends UObject { 
	bOverrideFullName: boolean;
	bOverrideInstancePath: boolean;
	bOverrideMaterialPath: boolean;
	bCreateInstance: boolean;
	bCreateMaterial: boolean;
	InstanceName: string;
	MaterialName: string;
	InstanceDestinationPath: string;
	MaterialDestinationPath: string;
	static Load(ResourceName: string): SubstanceImportOptionsUi;
	static Find(Outer: UObject, ResourceName: string): SubstanceImportOptionsUi;
	static GetDefaultObject(): SubstanceImportOptionsUi;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImportOptionsUi;
	static C(Other: UObject | any): SubstanceImportOptionsUi;
}

declare class SubstanceInstanceExporter extends Exporter { 
	static Load(ResourceName: string): SubstanceInstanceExporter;
	static Find(Outer: UObject, ResourceName: string): SubstanceInstanceExporter;
	static GetDefaultObject(): SubstanceInstanceExporter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceInstanceExporter;
	static C(Other: UObject | any): SubstanceInstanceExporter;
}

declare class SubstanceTextureThumbnailRenderer extends TextureThumbnailRenderer { 
	static Load(ResourceName: string): SubstanceTextureThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): SubstanceTextureThumbnailRenderer;
	static GetDefaultObject(): SubstanceTextureThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceTextureThumbnailRenderer;
	static C(Other: UObject | any): SubstanceTextureThumbnailRenderer;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	Bidirectional: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetTitleSelectionMode(TitleHeight: number): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number) => void>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeCustomContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutUserWidget: JavascriptSlateWidget, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget, OutAltLeftNodeBoxWidget: JavascriptSlateWidget, OutAltRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingAlternativeInputPinBox: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingAlternativeOutputPinBox: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnGetNodeComment: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => string>;
	OnSetNodeComment: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode, string: string) => void>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphPinObject extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	static Load(ResourceName: string): JavascriptGraphPinObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphPinObject;
	static GetDefaultObject(): JavascriptGraphPinObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphPinObject;
	static C(Other: UObject | any): JavascriptGraphPinObject;
}

declare class JavascriptTextProperty { 
	Key: string;
	Namespace: string;
	Value: string;
	TableId: string;
	clone() : JavascriptTextProperty;
	static C(Other: UObject | any): JavascriptTextProperty;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare class JavascriptLazyExtenderDelegates extends UObject { 
	GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: UObject[]) => JavascriptExtender>;
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
	RemoveAllLazyExtender(): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject | any): JavascriptViewportClick;
	GetClickPos(): IntPoint;
	GetDirection(): Vector;
	GetEvent(): EInputEvent;
	GetKey(): Key;
	GetOrigin(): Vector;
	IsAltDown(): boolean;
	IsControlDown(): boolean;
	IsShiftDown(): boolean;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
}

declare class JavascriptHitProxy { 
	clone() : JavascriptHitProxy;
	static C(Other: UObject | any): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadImageFromDiskAsync(ImagePath: string,Callback: AsyncTaskDownloadImage): boolean;
	static LoadFileToString(Path: string,Data?: string): {Data: string, $: boolean};
	static LoadFileToIntArray(Path: string,FileData?: number[]): {FileData: number[], $: boolean};
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FindWorldInPackage(Package: Package): World;
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddComponentsToBlueprint(Blueprint: Blueprint,Components: ActorComponent[],bHarvesting: boolean,OptionalNewRootComponent: ActorComponent,bKeepMobility: boolean): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	RestoreRealtime(bAllowDisable: boolean): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
	GetDefaultSkySphereComponent(): StaticMeshComponent;
	GetDefaultSkyLightComponent(): SkyLightComponent;
	GetDefaultPostProcessComponent(): PostProcessComponent;
	GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
	GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject | any): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string): boolean;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class MockAI extends UObject { 
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static GetDefaultObject(): MockAI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject | any): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static GetDefaultObject(): MockAI_BT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject | any): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static GetDefaultObject(): MockTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject | any): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject | any): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject | any): MockGameplayTaskOwner;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject | any): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject | any): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	LogActivation: number;
	LogDeactivation: number;
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAbortFinish: number;
	ExecuteTicks: number;
	AbortTicks: number;
	KeyNameExecute: string;
	KeyNameAbort: string;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject | any): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static GetDefaultObject(): TestBTTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject | any): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject | any): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	KeyName: string;
	Value: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
}

declare class TestPawnAction_Log extends PawnAction { 
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static GetDefaultObject(): TestPawnAction_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject | any): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject | any): TestPawnAction_CallFunction;
}

declare class GlobalEditorUtilityBase extends UObject { 
	HelpText: string;
	bDirtiedSelectionSet: boolean;
	bAutoRunDefaultAction: boolean;
	OnEachSelectedActor: UnrealEngineMulticastDelegate<(Actor: Actor, index: number) => void>;
	OnEachSelectedAsset: UnrealEngineMulticastDelegate<(Asset: UObject, index: number) => void>;
	static Load(ResourceName: string): GlobalEditorUtilityBase;
	static Find(Outer: UObject, ResourceName: string): GlobalEditorUtilityBase;
	static GetDefaultObject(): GlobalEditorUtilityBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GlobalEditorUtilityBase;
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	SelectNothing(): void;
	RenameAsset(Asset: UObject,NewName: string): void;
	OnDefaultActionClicked(): void;
	GetSelectionSet(): Actor[];
	GetSelectionBounds(Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	GetSelectedAssets(): UObject[];
	GetEditorUserSettings(): EditorPerProjectUserSettings;
	GetActorReference(PathToActor: string): Actor;
	ForEachSelectedAsset(): void;
	ForEachSelectedActor(): void;
	ClearActorSelectionSet(): void;
	static C(Other: UObject | any): GlobalEditorUtilityBase;
}

declare class ActorActionUtility extends GlobalEditorUtilityBase { 
	static Load(ResourceName: string): ActorActionUtility;
	static Find(Outer: UObject, ResourceName: string): ActorActionUtility;
	static GetDefaultObject(): ActorActionUtility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorActionUtility;
	GetSupportedClass(): UnrealEngineClass;
	static C(Other: UObject | any): ActorActionUtility;
}

declare class AssetActionUtility extends GlobalEditorUtilityBase { 
	static Load(ResourceName: string): AssetActionUtility;
	static Find(Outer: UObject, ResourceName: string): AssetActionUtility;
	static GetDefaultObject(): AssetActionUtility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetActionUtility;
	GetSupportedClass(): UnrealEngineClass;
	static C(Other: UObject | any): AssetActionUtility;
}

declare class EditorUtilityBlueprint extends Blueprint { 
	static Load(ResourceName: string): EditorUtilityBlueprint;
	static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprint;
	static GetDefaultObject(): EditorUtilityBlueprint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprint;
	static C(Other: UObject | any): EditorUtilityBlueprint;
}

declare class EditorUtilityBlueprintFactory extends Factory { 
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): EditorUtilityBlueprintFactory;
	static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprintFactory;
	static GetDefaultObject(): EditorUtilityBlueprintFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprintFactory;
	static C(Other: UObject | any): EditorUtilityBlueprintFactory;
}

declare class PlacedEditorUtilityBase extends Actor { 
	HelpText: string;
	static GetDefaultObject(): PlacedEditorUtilityBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlacedEditorUtilityBase;
	SetLevelViewportCameraInfo(CameraLocation: Vector,CameraRotation: Rotator): void;
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	SelectNothing(): void;
	GetSelectionSet(): Actor[];
	GetLevelViewportCameraInfo(CameraLocation?: Vector,CameraRotation?: Rotator): {CameraLocation: Vector, CameraRotation: Rotator, $: boolean};
	GetActorReference(PathToActor: string): Actor;
	ClearActorSelectionSet(): void;
	static C(Other: UObject | any): PlacedEditorUtilityBase;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare type EMeshInstancingReplacementMethod = 'RemoveOriginalActors' | 'KeepOriginalActorsAsEditorOnly' | 'EMeshInstancingReplacementMethod_MAX';
declare var EMeshInstancingReplacementMethod : { RemoveOriginalActors:'RemoveOriginalActors',KeepOriginalActorsAsEditorOnly:'KeepOriginalActorsAsEditorOnly',EMeshInstancingReplacementMethod_MAX:'EMeshInstancingReplacementMethod_MAX', };
declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	MeshReplacementMethod: EMeshInstancingReplacementMethod;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidAntVerbosity = 'Quiet' | 'Normal' | 'Verbose' | 'EAndroidAntVerbosity_MAX';
declare var EAndroidAntVerbosity : { Quiet:'Quiet',Normal:'Normal',Verbose:'Verbose',EAndroidAntVerbosity_MAX:'EAndroidAntVerbosity_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EGoogleVRCaps = 'Cardboard' | 'Daydream33' | 'Daydream63' | 'Daydream66' | 'EGoogleVRCaps_MAX';
declare var EGoogleVRCaps : { Cardboard:'Cardboard',Daydream33:'Daydream33',Daydream63:'Daydream63',Daydream66:'Daydream66',EGoogleVRCaps_MAX:'EGoogleVRCaps_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare class PlatformRuntimeAudioCompressionOverrides { 
	bOverrideCompressionTimes: boolean;
	DurationThreshold: number;
	MaxNumRandomBranches: number;
	SoundCueQualityIndex: number;
	clone() : PlatformRuntimeAudioCompressionOverrides;
	static C(Other: UObject | any): PlatformRuntimeAudioCompressionOverrides;
}

declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableGradle: boolean;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bAllowLargeOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	AntVerbosity: EAndroidAntVerbosity;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	bPackageForGearVR: boolean;
	bRemoveOSIG: boolean;
	GoogleVRCaps: EGoogleVRCaps[];
	bGoogleVRSustainedPerformance: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArmV7: boolean;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES2: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bSaveSymbols: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bResampleForDevice: boolean;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bMultiTargetFormat_ETC1: boolean;
	bMultiTargetFormat_ETC1a: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_PVRTC: boolean;
	bMultiTargetFormat_ATC: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC1: number;
	TextureFormatPriority_ETC1a: number;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_PVRTC: number;
	TextureFormatPriority_ATC: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_61' | 'IOS_7' | 'IOS_8' | 'IOS_9' | 'IOS_10' | 'IOS_11' | 'IOS_12' | 'IOS_MAX';
declare var EIOSVersion : { IOS_61:'IOS_61',IOS_7:'IOS_7',IOS_8:'IOS_8',IOS_9:'IOS_9',IOS_10:'IOS_10',IOS_11:'IOS_11',IOS_12:'IOS_12',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bCookPVRTCTextures: boolean;
	bCookASTCTextures: boolean;
	bSupportsOpenGLES2: boolean;
	EnableRemoteShaderCompile: boolean;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bDevForArmV7: boolean;
	bDevForArm64: boolean;
	bDevForArmV7S: boolean;
	bShipForArmV7: boolean;
	bShipForArm64: boolean;
	bShipForArmV7S: boolean;
	bShipForBitcode: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bTreatRemoteAsSeparateController: boolean;
	bAllowRemoteRotation: boolean;
	bUseRemoteAsVirtualJoystick: boolean;
	bUseRemoteAbsoluteDpadValues: boolean;
	bAllowControllers: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	bDisableHTTPS: boolean;
	MaxShaderLanguageVersion: number;
	UseFastIntrinsics: boolean;
	EnableMathOptimisations: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bResampleForDevice: boolean;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare type ELuminFrameTimingHint = 'Unspecified' | 'Maximum' | 'FPS_60' | 'FPS_120' | 'ELuminFrameTimingHint_MAX';
declare var ELuminFrameTimingHint : { Unspecified:'Unspecified',Maximum:'Maximum',FPS_60:'FPS_60',FPS_120:'FPS_120',ELuminFrameTimingHint_MAX:'ELuminFrameTimingHint_MAX', };
declare type ELuminPrivilege = 'Invalid' | 'AudioRecognizer' | 'BatteryInfo' | 'CameraCapture' | 'WorldReconstruction' | 'InAppPurchase' | 'AudioCaptureMic' | 'DrmCertificates' | 'Occlusion' | 'LowLatencyLightwear' | 'Internet' | 'IdentityRead' | 'BackgroundDownload' | 'BackgroundUpload' | 'MediaDrm' | 'Media' | 'MediaMetadata' | 'PowerInfo' | 'LocalAreaNetwork' | 'VoiceInput' | 'Documents' | 'ConnectBackgroundMusicService' | 'RegisterBackgroundMusicService' | 'PwFoundObjRead' | 'NormalNotificationsUsage' | 'MusicService' | 'ControllerPose' | 'ScreensProvider' | 'GesturesSubscribe' | 'GesturesConfig' | 'ELuminPrivilege_MAX';
declare var ELuminPrivilege : { Invalid:'Invalid',AudioRecognizer:'AudioRecognizer',BatteryInfo:'BatteryInfo',CameraCapture:'CameraCapture',WorldReconstruction:'WorldReconstruction',InAppPurchase:'InAppPurchase',AudioCaptureMic:'AudioCaptureMic',DrmCertificates:'DrmCertificates',Occlusion:'Occlusion',LowLatencyLightwear:'LowLatencyLightwear',Internet:'Internet',IdentityRead:'IdentityRead',BackgroundDownload:'BackgroundDownload',BackgroundUpload:'BackgroundUpload',MediaDrm:'MediaDrm',Media:'Media',MediaMetadata:'MediaMetadata',PowerInfo:'PowerInfo',LocalAreaNetwork:'LocalAreaNetwork',VoiceInput:'VoiceInput',Documents:'Documents',ConnectBackgroundMusicService:'ConnectBackgroundMusicService',RegisterBackgroundMusicService:'RegisterBackgroundMusicService',PwFoundObjRead:'PwFoundObjRead',NormalNotificationsUsage:'NormalNotificationsUsage',MusicService:'MusicService',ControllerPose:'ControllerPose',ScreensProvider:'ScreensProvider',GesturesSubscribe:'GesturesSubscribe',GesturesConfig:'GesturesConfig',ELuminPrivilege_MAX:'ELuminPrivilege_MAX', };
declare class LuminRuntimeSettings extends UObject { 
	PackageName: string;
	ApplicationDisplayName: string;
	bIsScreensApp: boolean;
	FrameTimingHint: ELuminFrameTimingHint;
	bProtectedContent: boolean;
	bUseMobileRendering: boolean;
	bUseVulkan: boolean;
	bBuildWithNvTegraGfxDebugger: boolean;
	Certificate: FilePath;
	IconModelPath: DirectoryPath;
	IconPortalPath: DirectoryPath;
	VersionCode: number;
	MinimumOSVersion: string;
	AppPrivileges: ELuminPrivilege[];
	ExtraApplicationNodes: string[];
	ExtraComponentNodes: string[];
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): LuminRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): LuminRuntimeSettings;
	static GetDefaultObject(): LuminRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminRuntimeSettings;
	static C(Other: UObject | any): LuminRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	ANTPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class HTML5SDKSettings extends UObject { 
	static Load(ResourceName: string): HTML5SDKSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5SDKSettings;
	static GetDefaultObject(): HTML5SDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5SDKSettings;
	static C(Other: UObject | any): HTML5SDKSettings;
}

declare type ECanvasScalingMode = 'Stretch' | 'Aspect' | 'Fixed' | 'ECanvasScalingMode_MAX';
declare var ECanvasScalingMode : { Stretch:'Stretch',Aspect:'Aspect',Fixed:'Fixed',ECanvasScalingMode_MAX:'ECanvasScalingMode_MAX', };
declare class HTML5TargetSettings extends UObject { 
	EnableIndexedDB: boolean;
	UseFixedTimeStep: boolean;
	EnableTracing: boolean;
	CanvasScalingMode: ECanvasScalingMode;
	Compressed: boolean;
	DeployServerPort: number;
	UploadToS3: boolean;
	S3Region: string;
	S3KeyID: string;
	S3SecretAccessKey: string;
	S3BucketName: string;
	S3FolderName: string;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): HTML5TargetSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5TargetSettings;
	static GetDefaultObject(): HTML5TargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5TargetSettings;
	static C(Other: UObject | any): HTML5TargetSettings;
}

declare class MagicLeapSDKSettings extends UObject { 
	MLSDKPath: DirectoryPath;
	static Load(ResourceName: string): MagicLeapSDKSettings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSDKSettings;
	static GetDefaultObject(): MagicLeapSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSDKSettings;
	static C(Other: UObject | any): MagicLeapSDKSettings;
}

declare type ETutorialContent = 'None' | 'Text' | 'UDNExcerpt' | 'RichText' | 'ETutorialContent_MAX';
declare var ETutorialContent : { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText',ETutorialContent_MAX:'ETutorialContent_MAX', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	text: string;
	clone() : TutorialContent;
	static C(Other: UObject | any): TutorialContent;
}

declare type ETutorialAnchorIdentifier = 'None' | 'NamedWidget' | 'Asset' | 'ETutorialAnchorIdentifier_MAX';
declare var ETutorialAnchorIdentifier : { None:'None',NamedWidget:'NamedWidget',Asset:'Asset',ETutorialAnchorIdentifier_MAX:'ETutorialAnchorIdentifier_MAX', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: SoftObjectPath;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GuidString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject | any): TutorialContentAnchor;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
	clone() : TutorialWidgetContent;
	static C(Other: UObject | any): TutorialWidgetContent;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
	clone() : TutorialStage;
	static C(Other: UObject | any): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: SoftClassPath;
	NextTutorial: SoftClassPath;
	bIsStandalone: boolean;
	AssetToUse: SoftObjectPath;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static GetDefaultObject(): EditorTutorial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	static OpenAsset(Asset: UObject): void;
	OnTutorialStageStarted(StageName: string): void;
	OnTutorialStageEnded(StageName: string): void;
	OnTutorialLaunched(): void;
	OnTutorialClosed(): void;
	static GoToPreviousTutorialStage(): void;
	static GoToNextTutorialStage(): void;
	static GetEngineFolderVisibilty(): boolean;
	GetActorReference(PathToActor: string): Actor;
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
	static C(Other: UObject | any): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static GetDefaultObject(): EditorTutorialFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject | any): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject | any): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: SoftObjectPath;
	clone() : TutorialCategory;
	static C(Other: UObject | any): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: SoftClassPath;
	LaunchTutorial: SoftClassPath;
	clone() : TutorialContext;
	static C(Other: UObject | any): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	TutorialContexts: TutorialContext[];
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static GetDefaultObject(): EditorTutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject | any): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static GetDefaultObject(): TutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject | any): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: SoftClassPath;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject | any): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static GetDefaultObject(): TutorialStateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject | any): TutorialStateSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	GraphsBackgroundColor: Color;
	bPresistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	PresistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActor extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAsset[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

