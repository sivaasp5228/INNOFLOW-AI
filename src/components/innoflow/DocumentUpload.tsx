import { useState, useCallback } from "react";
import { Upload, FileText, X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "uploading" | "processing" | "completed" | "error";
  progress: number;
  extractedSteps?: string[];
  error?: string;
}

interface DocumentUploadProps {
  onFilesProcessed: (files: UploadedFile[]) => void;
  maxFiles?: number;
}

export function DocumentUpload({ onFilesProcessed, maxFiles = 5 }: DocumentUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  }, []);

  const processFiles = (newFiles: File[]) => {
    if (files.length + newFiles.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    const processedFiles: UploadedFile[] = newFiles
      .filter(file => validTypes.includes(file.type))
      .map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        status: "uploading" as const,
        progress: 0
      }));

    setFiles(prev => [...prev, ...processedFiles]);

    // Simulate file processing
    processedFiles.forEach(file => {
      simulateFileProcessing(file);
    });
  };

  const simulateFileProcessing = (file: UploadedFile) => {
    // Upload phase
    const uploadInterval = setInterval(() => {
      setFiles(prev => prev.map(f => {
        if (f.id === file.id && f.status === "uploading") {
          const newProgress = Math.min(f.progress + Math.random() * 20 + 10, 100);
          if (newProgress >= 100) {
            clearInterval(uploadInterval);
            setTimeout(() => startProcessing(f.id), 500);
          }
          return { ...f, progress: newProgress };
        }
        return f;
      }));
    }, 200);

    // Store interval ID for cleanup
    (file as any).uploadInterval = uploadInterval;
  };

  const startProcessing = (fileId: string) => {
    setFiles(prev => prev.map(f => 
      f.id === fileId ? { ...f, status: "processing", progress: 0 } : f
    ));

    // Simulate document analysis and step extraction
    const processingInterval = setInterval(() => {
      setFiles(prev => prev.map(f => {
        if (f.id === fileId && f.status === "processing") {
          const newProgress = Math.min(f.progress + Math.random() * 15 + 5, 100);
          if (newProgress >= 100) {
            clearInterval(processingInterval);
            // Define extracted steps
            const extractedSteps = [
              "Initial client consultation and requirements gathering",
              "Stakeholder analysis and identification",
              "Process documentation and mapping",
              "Bottleneck identification and analysis",
              "Optimization recommendations generation",
              "Implementation planning and timeline creation",
              "Resource allocation and team assignment",
              "Success metrics and KPI definition",
              "Testing and validation procedures",
              "Deployment and monitoring setup"
            ];
            
            const updatedFile = {
              ...f,
              status: "completed" as const,
              progress: 100,
              extractedSteps: extractedSteps.slice(0, Math.floor(Math.random() * 4) + 3)
            };
            // Call the callback after a delay
            setTimeout(() => {
              onFilesProcessed([updatedFile]);
            }, 0);
            return updatedFile;
          }
          return { ...f, progress: newProgress };
        }
        return f;
      }));
    }, 300);
  };

  const completeProcessing = (fileId: string) => {
    const extractedSteps = [
      "Initial client consultation and requirements gathering",
      "Stakeholder analysis and identification",
      "Process documentation and mapping",
      "Bottleneck identification and analysis",
      "Optimization recommendations generation",
      "Implementation planning and timeline creation",
      "Resource allocation and team assignment",
      "Success metrics and KPI definition",
      "Testing and validation procedures",
      "Deployment and monitoring setup"
    ];

    const updatedFile = {
      id: fileId,
      status: "completed" as const,
      progress: 100,
      extractedSteps: extractedSteps.slice(0, Math.floor(Math.random() * 4) + 3)
    };

    setFiles(prev => {
      const updated = prev.map(f => f.id === fileId ? { ...f, ...updatedFile } : f);
      return updated;
    });
    
    // Call the callback after state update
    setTimeout(() => {
      setFiles(prev => {
        const completedFiles = prev.filter(f => f.status === "completed");
        onFilesProcessed(completedFiles);
        return prev;
      });
    }, 0);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return <FileText className="h-4 w-4 text-red-400" />;
    if (type.includes('word')) return <FileText className="h-4 w-4 text-blue-400" />;
    return <FileText className="h-4 w-4 text-gray-400" />;
  };

  const getStatusIcon = (status: UploadedFile['status']) => {
    switch (status) {
      case "uploading":
        return <Loader2 className="h-3 w-3 animate-spin text-blue-500" />;
      case "processing":
        return <Loader2 className="h-3 w-3 animate-spin text-orange-500" />;
      case "completed":
        return <CheckCircle className="h-3 w-3 text-green-500" />;
      case "error":
        return <AlertCircle className="h-3 w-3 text-red-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed transition-colors ${
          isDragOver
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50"
        }`}
      >
        <div
          className="p-8 text-center"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Upload Process Documents</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop PDF, Word, or text files here, or click to browse
          </p>
          <input
            type="file"
            id="file-upload"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="mr-2 h-4 w-4" />
              Select Files
            </label>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Maximum {maxFiles} files • PDF, DOC, DOCX, TXT
          </p>
        </div>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Uploaded Files</h4>
          {files.map((file) => (
            <Card key={file.id} className="p-4">
              <div className="flex items-start gap-3">
                {getFileIcon(file.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    {getStatusIcon(file.status)}
                    <Badge variant="outline" className="text-xs">
                      {file.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {formatFileSize(file.size)}
                  </p>
                  
                  {/* Progress Bar */}
                  {(file.status === "uploading" || file.status === "processing") && (
                    <div className="mb-2">
                      <Progress value={file.progress} className="h-1" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {file.status === "uploading" ? "Uploading..." : "Processing..."} {Math.round(file.progress)}%
                      </p>
                    </div>
                  )}

                  {/* Extracted Steps */}
                  {file.status === "completed" && file.extractedSteps && (
                    <div className="mt-3">
                      <p className="text-xs font-medium mb-2">Extracted Process Steps:</p>
                      <div className="space-y-1">
                        {file.extractedSteps.map((step, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            <p className="text-xs text-muted-foreground">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {file.status === "error" && (
                    <p className="text-xs text-red-500 mt-1">{file.error}</p>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(file.id)}
                  className="shrink-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
